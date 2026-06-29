---
name: parallel-review
allowed-tools: Bash(git diff:*), Bash(git log:*), Bash(git show:*), Bash(git status:*), Bash(git branch:*), Bash(git rev-parse:*), Bash(gh pr:*), Bash(gh api:*), Bash(bunx ulid), Bash(mkdir:*), Agent, Write(*), Read(*)
argument-hint: [PR number | commit hash | range | "staged"]
description: Four agents will conduct parallel reviews, which will then be merged.
---

## Context

- Current branch: !`git branch --show-current`
- Git status: !`git status --short`

## Your Task

Based on `$ARGUMENTS`, retrieve the diff and conduct a code review with 4 parallel agents. Output the results as a Markdown file in the `.review/` directory.

---

## Step 1: Determine Input Mode and Retrieve Diff

Auto-detect based on the content of `$ARGUMENTS`:

| Pattern                          | Detection      | Diff Command        | Filename                 |
| -------------------------------- | -------------- | ------------------- | ------------------------ |
| Digits only or prefixed with `#` | PR number      | `gh pr diff {n}`    | `pr-{n}-{ulid}.md`       |
| Hex 7-40 chars                   | Commit hash    | `git show {hash}`   | `{short-hash}-{ulid}.md` |
| Contains `..`                    | Range          | `git diff {range}`  | `range-{ulid}.md`        |
| Empty or `staged`                | Staged changes | `git diff --staged` | `staged-{ulid}.md`       |

1. Detect the mode using the rules above and run the corresponding command to get the diff
2. Generate a ULID with the `bunx ulid` command
3. If the diff is empty, report "No diff to review" and stop

## Step 2: Parallel Review with 4 Agents

Pass the full diff to 4 Task agents and run reviews **in parallel**. Instruct each agent as follows:

### Agent 1: Defensive Review (Security + Edge Cases)

Focus areas:

- **Security**: Injection, authentication gaps, secret exposure, XSS, CSRF, path traversal
- **Edge Cases**: null/undefined, empty arrays/strings, concurrency, boundary values, type boundaries

### Agent 2: Functional Review (Correctness)

Focus areas:

- **Correctness**: Logic bugs, off-by-one, inverted conditions, type mismatches, return value inconsistencies, missing exception handling

### Agent 3: Efficiency Review (Performance + Over-engineering)

Focus areas:

- **Performance**: N+1 queries, unnecessary re-renders, memory leaks, unnecessary copies, O(n^2)+ complexity
- **Over-engineering**: YAGNI violations, unnecessary abstractions, premature optimization, excessive design patterns

### Agent 4: Sustainability Review (Maintainability)

Focus areas:

- **Maintainability**: Readability after 6 months, cyclomatic complexity, naming quality, separation of concerns, implicit dependencies

### Common Instructions for Each Agent

```
Review the following diff ONLY from the perspective of "{focus areas}".

## Review Attitude Rules (Strict)
- Do NOT flag code style preferences (that's the formatter's job)
- Do NOT make "nice to have" suggestions — only flag actual bugs and risks
- Do NOT flag issues in existing code outside the diff
- Every finding MUST include rationale and a suggested fix
- Do NOT over-report — the review itself should not be over-engineered

## Line Number Accuracy Rules (Strict)
- When citing `file.ts:N-M`, you MUST verify by reading the file that the cited line actually contains the code you're critiquing
- If the fix location is OUTSIDE the diff (e.g., modifying an existing handler/function not shown in the diff), you MUST read the full file with the Read tool to find the accurate line number
- Do NOT cite diff-adjacent lines as a proxy for the actual fix location
- When referring to a function definition (e.g., "add a reset call to `handleMenuClose`"), cite the line WHERE THE FUNCTION IS DEFINED, not where it is called or where related state is manipulated
- When referring to a variable's declaration, cite the `useState` / `const` / `let` line, not a usage site

## Output Format
Output each finding in the following format (in Japanese):
- Severity: Critical / High / Middle / Low
- Axis: {applicable axis name}
- File/Line: `file.ts:42-49`
- Description: Specific description of the problem
- Rationale: Why this is a problem
- Suggested fix: Concrete fix (code or approach)

If there are no findings, output only "指摘事項なし".

---
{full diff}
```

## Step 3: Merge Results and Output

Collect results from all 4 agents and process:

1. **Deduplicate**: Merge identical findings for the same file/line
2. **Sort by severity**: Critical -> High -> Middle -> Low
3. Determine the repository root: `REPO_ROOT=$(git rev-parse --show-toplevel)` and create the directory: `mkdir -p "$REPO_ROOT/.review"`
4. Write a Markdown file to `$REPO_ROOT/.review/` with the filename determined in Step 1, using the format below

### Output Format (always in Japanese)

```markdown
# Code Review: {description of target}

| Key    | Value                               |
| ------ | ----------------------------------- |
| Date   | YYYY-MM-DD                          |
| Branch | {branch name}                       |
| Target | PR #123 / staged / {hash} / {range} |

## Summary

Overview of changes and overall observations (2-3 sentences)

## Findings

### Critical

- **[Security]** `file.ts:42-49` — description
  > Suggested fix: ...

### High

(same format)

### Middle

(same format)

### Low

(same format)

---

> Omit severity levels with no findings
> If there are no issues at all, write "✅ 指摘事項なし"
```

5. Report the output file path to the user
6. Display the following message so the user can easily resume this session later:
   ```
   To resume this session later: /rename {ulid}
   ```
   Replace `{ulid}` with the actual ULID generated in Step 1.

## Important Notes

- Review output is always written in Japanese
- Always resolve the repository root with `git rev-parse --show-toplevel` and create `.review/` there (do NOT use a relative path)
- Omit severity level sections that have no findings worth reporting
- Avoid excessive reporting
- When referencing files, always include line numbers (e.g. `file.ts:42-49`)
- All 4 agents MUST be run in parallel using the Task tool (`subagent_type: "general-purpose"`)
