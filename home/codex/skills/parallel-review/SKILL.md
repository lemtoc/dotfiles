---
name: parallel-review
description: Run a focused code review with four parallel Codex subagents. Use when the user asks for parallel review, parallel-review, parallelreview, pararellreview, a multi-agent review, or a review of a PR, commit, range, or staged diff using multiple review perspectives.
---

# Parallel Review

Run four focused review passes in parallel, merge the results, and write a Japanese Markdown report under `.review/`.

## Input

Use the user's request text as the target argument.

| Target pattern                    | Mode           | Diff command        | Filename                 |
| --------------------------------- | -------------- | ------------------- | ------------------------ |
| Digits only or prefixed with `#`  | PR number      | `gh pr diff <n>`    | `pr-<n>-<id>.md`         |
| Hex string, 7 to 40 chars         | Commit hash    | `git show <hash>`   | `<short-hash>-<id>.md`   |
| Contains `..`                     | Range          | `git diff <range>`  | `range-<id>.md`          |
| Empty, `staged`, or no clear arg  | Staged changes | `git diff --staged` | `staged-<id>.md`         |

If the diff is empty, report `No diff to review` and stop.

Generate `<id>` with `bunx ulid` when available. If that fails without a useful recovery path, use a timestamp-based identifier from `date -u +%Y%m%dT%H%M%SZ`.

## Workflow

1. Inspect the repository:
   - `git rev-parse --show-toplevel`
   - `git branch --show-current`
   - `git status --short`
2. Retrieve the diff using the detected mode.
3. Start all four review agents before waiting for any result:
   - If the subagent tools are not already visible, call `tool_search` with a query like `spawn sub-agent parallel agents`.
   - Use `multi_agent_v1.spawn_agent` with `agent_type: "explorer"` for each review pass.
   - Do not set a model override unless the user explicitly requested one.
   - Pass the repository root, target description, focus area, common instructions, and full diff to each agent.
4. Collect all results with `multi_agent_v1.wait_agent`, then close completed agents with `multi_agent_v1.close_agent`.
5. Deduplicate matching findings for the same file and line.
6. Sort findings by severity: Critical, High, Middle, Low.
7. Create `.review/` at the repository root and write the Markdown report there.
8. Report the output path and the resume command:
   - `To resume this session later: /rename <id>`

If subagent tools are unavailable after `tool_search`, do four local review passes with the same focus areas, mention that the parallel subagent tool was unavailable, and still write the report.

## Review Agents

### Agent 1: Defensive Review

Focus on security and edge cases:

- Security: injection, authentication gaps, secret exposure, XSS, CSRF, path traversal
- Edge cases: null or undefined values, empty arrays or strings, concurrency, boundary values, type boundaries

### Agent 2: Functional Review

Focus on correctness:

- Logic bugs, off-by-one errors, inverted conditions, type mismatches, return value inconsistencies, missing exception handling

### Agent 3: Efficiency Review

Focus on performance and over-engineering:

- Performance: N+1 queries, unnecessary re-renders, memory leaks, unnecessary copies, O(n^2) or worse complexity
- Over-engineering: YAGNI violations, unnecessary abstractions, premature optimization, excessive design patterns

### Agent 4: Sustainability Review

Focus on maintainability:

- Readability after six months, cyclomatic complexity, naming quality, separation of concerns, implicit dependencies

## Common Agent Instructions

Give each agent instructions equivalent to the following:

```text
Review the diff only from this perspective: <focus area>.

Review attitude rules:
- Do not flag code style preferences; formatter output is outside this review.
- Do not make nice-to-have suggestions. Flag only actual bugs and risks.
- Do not flag issues in existing code outside the diff unless the changed code directly exposes the risk.
- Every finding must include rationale and a suggested fix.
- Do not over-report.

Line number accuracy rules:
- When citing `file.ts:N-M`, verify by reading the file that the cited line actually contains the code being critiqued.
- If the fix location is outside the diff, read the full file to find the accurate line number.
- Do not cite diff-adjacent lines as a proxy for the actual fix location.
- When referring to a function definition, cite the line where the function is defined.
- When referring to a variable declaration, cite the declaration line.

Output findings in Japanese using this format:
- Severity: Critical / High / Middle / Low
- Axis: <axis name>
- File/Line: `file.ts:42-49`
- Description: Specific problem
- Rationale: Why this is a problem
- Suggested fix: Concrete fix, code, or approach

If there are no findings, output only `指摘事項なし`.
```

## Report Format

Always write the final report in Japanese:

```markdown
# Code Review: <target description>

| Key    | Value                 |
| ------ | --------------------- |
| Date   | YYYY-MM-DD            |
| Branch | <branch name>         |
| Target | PR #123 / staged / <hash> / <range> |

## Summary

<Overview of changes and overall observations in 2-3 sentences.>

## Findings

### Critical

- **[Security]** `file.ts:42-49` - description
  > Suggested fix: ...

### High

### Middle

### Low
```

Omit severity sections with no findings. If there are no findings, write `指摘事項なし` under `## Findings`.

## Notes

- Review output is always Japanese.
- The review report must be written to `.review/` at the repository root, never a relative working-directory guess.
- Do not modify the code being reviewed.
- Use absolute paths when reporting the created review file to the user.
- Avoid excessive reporting.
- Every finding must include a file and line reference.
