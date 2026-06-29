---
name: issue-start
allowed-tools: Bash(gh issue view:*), Bash(gh issue list:*), Bash(gh pr view:*), Bash(gh pr list:*), Bash(gh api:*), Bash(git log:*), Bash(git branch:*), Bash(git status:*), Bash(git diff:*), Bash(git rev-parse:*), Read(*), Grep(*), Glob(*), AskUserQuestion
argument-hint: [issue number | issue URL]
description: Kick off work on a GitHub issue — read the issue and related code, then align understanding with the user via one-question-at-a-time clarifications. Does NOT write code.
---

## Context

- Current branch: !`git branch --show-current`
- Git status: !`git status --short`

## Your Task

Based on `$ARGUMENTS` (issue number or URL), prepare to tackle a GitHub issue.

**This skill's goal is alignment, not implementation.**
Do NOT write, edit, or stage any code in this skill. Stop at Step 5 and wait for the user to start a new turn for the actual implementation.

All user-facing output is in **Japanese**.

---

## Step 1: Read the Issue Thoroughly

1. Fetch the issue body **and all comments** with `gh issue view {n} --comments`
   - Accept both bare numbers (`1205`) and URLs
2. Check every linked PR / issue referenced in the body or comments
   - Use `gh pr view` / `gh issue view` / `gh api` as needed
3. Note any attached screenshots / images and acknowledge them in your read
4. Extract explicitly:
   - Problem statement / user story
   - Acceptance criteria (stated or implied)
   - Constraints (deadlines, labels, milestones, assignees)
   - Out-of-scope items

Do NOT summarize to the user yet — finish reading the code first.

## Step 2: Read Related Existing Code

1. Load project conventions: `CLAUDE.md`, `README.md`, any `AGENTS.md` / `.cursorrules`
2. Locate files / modules related to the issue using `Grep` / `Glob`
3. Read those files to understand:
   - Current behavior
   - Existing abstractions, naming, test patterns
   - Recent touch history (`git log --oneline -- <path>`) — there may be prior work
4. Check for related branches / open PRs with similar prefixes

## Step 3: Present Initial Understanding

Briefly share (in Japanese, ~5–10 lines):

- Your understanding of the issue (1 to 3 sentences)
- Key files likely to be related (path + one-line description of its role)
- Ambiguities or points requiring judgment noticed at this stage

Do not ask questions at this point. Simply provide an opportunity for the user to make corrections.

## Step 4: Clarifying Q&A (One Question per Turn)

Ask via the `AskUserQuestion` tool.

### Rules (Strict)

- **Only one question at a time.** Compound questions like `1-a / 1-b` are prohibited. Always serialize questions, as the response may change subsequent premises.
- **Ask the highest-leverage question first** — prioritize those where the answer will significantly branch the implementation strategy.
- **Re-evaluate the remaining question list** after each response. In many cases, the questions themselves become unnecessary.
- Whenever possible, present choices in the `AskUserQuestion` format to **reduce user response cost**. Use open-ended descriptions only when they do not fit into options.
- **Do not ask questions if no ambiguity remains.** "Asking just to be sure" is prohibited.

### Typical clarification axes (参考, 順不同)

- Scope: What is included in the current phase vs. what will be deferred to future phases
- UX / Behavioral branching: Policies for cases where multiple interpretations are possible
- Edge cases: Error states, empty states, race conditions, and permission boundaries
- Testing policy: Unit / integration / manual testing and expected coverage
- Backward compatibility / Migration: Impact on existing data and APIs
- Implementation strategy: Reuse of existing abstractions vs. introduction of new ones
- Non-functional requirements: Performance, accessibility, and i18n

## Step 5: Final Alignment (Definition of Done)

Once you have run out of questions, provide a summary to align understanding using the template below:

```
## 認識合わせ

- **対応内容**: ...
- **受け入れ基準**:
  - ...
- **スコープ外**:
  - ...
- **テスト方針**: ...
- **主要な設計判断**: ...
- **関係する主要ファイル**:
  - `path/to/file.ts` — ...
```

To confirm explicitly at the end:

> **この認識で実装を進めてよいですか？**

Wait for the next message until user approval is obtained. **The skill ends here.**

---

## Important Notes

- Do not write, edit, or stage any code within this skill.
- Ask only one question per turn (complex or parallel questions are prohibited).
- After a long Q&A session, re-read the Issue body from Step 1 to ensure that scope drift has not occurred.
- If the Issue is self-evident (e.g., a clear typo fix), skip Step 4 and proceed to Step 5.
- All user-facing output must be in Japanese.
- Images attached to an Issue cannot be retrieved directly; if necessary, ask the user to describe the content of the image.
