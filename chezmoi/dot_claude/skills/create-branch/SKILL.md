---
name: create-branch
allowed-tools: Bash(gh issue view:*), Bash(git switch:*), Bash(git checkout:*), Bash(git branch:*), Bash(git status:*), Bash(git rev-parse:*), Bash(git for-each-ref:*), Bash(git fetch:*), AskUserQuestion
argument-hint: [issue number | issue URL | description]
description: Create a git branch with an appropriate name in the form `prefix/{issue-no}-summary`
---

## Context

- Current branch: !`git branch --show-current`
- Git status: !`git status --short`
- Recent local branches (for naming conventions): !`git for-each-ref --sort=-committerdate refs/heads/ --count=20 --format='%(refname:short)'`

## Your Task

Based on `$ARGUMENTS`, create a new git branch with a name in the format:

```
prefix/{issue-no}-summary
```

If no issue number is available (i.e. the user only provided a description), omit the `{issue-no}-` segment and use `prefix/summary`.

**This skill only creates a branch.** Do NOT write, edit, or stage any code.
All user-facing output is in **Japanese**.

---

## Step 1: Classify `$ARGUMENTS`

Decide which input form was given:

1. **Issue reference** — a bare integer (e.g. `123`) or a GitHub issue URL (e.g. `https://github.com/owner/repo/issues/123`)
2. **Description** — any other free-form text (e.g. "ログインボタンの色を直す")
3. **Empty** — `$ARGUMENTS` is empty or whitespace-only

If empty, use `AskUserQuestion` to ask the user for an issue number or a short description before continuing.

## Step 2: Gather Source Material

### If the input is an issue reference

Run `gh issue view {n} --json number,title,labels` to fetch:

- `number` → used as `{issue-no}`
- `title` → used as the basis for `summary`
- `labels` → used as a hint for `prefix`

If `gh issue view` fails (e.g. wrong repo, no auth), fall back to treating `$ARGUMENTS` as a description and ask the user to confirm the intended issue number via `AskUserQuestion`.

### If the input is a description

Use the description directly as the basis for `summary`. There is no `{issue-no}`.

## Step 3: Decide the `prefix`

Map the issue labels (or, for descriptions, infer from the wording) to a Conventional Commits-style prefix:

| Signal                                        | Prefix     |
| --------------------------------------------- | ---------- |
| `bug`, `defect`, "fix", "直す", "修正"        | `fix`      |
| `enhancement`, `feature`, "追加", "実装"      | `feat`     |
| `documentation`, `docs`, "ドキュメント"       | `docs`     |
| `refactor`, "リファクタ"                      | `refactor` |
| `test`, "テスト"                              | `test`     |
| `chore`, `dependencies`, "依存", "更新"       | `chore`    |
| `performance`, `perf`, "パフォーマンス"       | `perf`     |
| `style`, "整形", "フォーマット"               | `style`    |

If multiple signals match, or none match clearly, ask the user via `AskUserQuestion` (offer the most likely 2-3 candidates as choices).

## Step 4: Generate the `summary`

Convert the title or description into a short, branch-safe slug:

- **Lowercase ASCII kebab-case** (`a-z`, `0-9`, `-` only). Replace anything else with `-`, and collapse repeated `-`.
- **Translate Japanese / non-English titles to English** before slugifying. The slug must be readable to teammates who do not read the source language.
- Strip leading verbs that duplicate the prefix (e.g. for `feat/`, drop a leading `add-`; for `fix/`, drop a leading `fix-`) **only when the result still reads naturally**.
- Aim for **3-5 words / ~40 chars**. Drop articles (`a`, `the`) and filler.
- Do not start or end with `-`.

Examples:

| Input                                       | Prefix | Issue | Result                              |
| ------------------------------------------- | ------ | ----- | ----------------------------------- |
| Issue #123 "Add OAuth2 login support"       | `feat` | 123   | `feat/123-oauth2-login-support`     |
| Issue #42 "Fix null check in auth flow"     | `fix`  | 42    | `fix/42-null-check-in-auth-flow`    |
| Description "ログインボタンの色を直す"      | `fix`  | —     | `fix/login-button-color`            |
| Description "依存関係を最新に更新"          | `chore`| —     | `chore/update-dependencies`         |

## Step 5: Confirm with the User

Before creating the branch, present the proposal and ask for confirmation **using `AskUserQuestion`** with options:

- `はい、作成する` — proceed
- `名前を変更する` — let the user supply an alternative name
- `中止する` — abort

Show the proposed name and the source (issue title / description) clearly:

```
作成するブランチ名: feat/123-oauth2-login-support
  - prefix : feat (label: enhancement)
  - issue  : #123 "Add OAuth2 login support"
  - summary: oauth2-login-support
```

Skip this confirmation **only** if `$ARGUMENTS` already contained an explicit, fully-formed branch name (e.g. the user pasted `feat/123-foo` literally) — in that case still echo the name back before creating.

## Step 6: Pre-flight Checks

Before creating, verify:

1. **No name collision** — run `git rev-parse --verify --quiet refs/heads/<name>`. If it exists, ask the user to either switch to it or pick a new name.
2. **Working tree state** — review the **Git status** from context. If there are uncommitted changes that would be carried into the new branch unintentionally, warn the user (`git switch -c` carries them over) and let them decide via `AskUserQuestion`:
   - `そのまま新ブランチへ持ち越す`
   - `中止して退避してから再実行する`
3. **Base branch** — by default, branch off the current `HEAD`. Do **not** silently switch to `main`/`master` first; if the current branch is unusual (e.g. another feature branch), call it out explicitly so the user can decide.

## Step 7: Create the Branch

Run:

```bash
git switch -c <name>
```

Then verify with `git branch --show-current` and report back to the user:

```
ブランチを作成しました: feat/123-oauth2-login-support
  (現在のブランチ: feat/123-oauth2-login-support)
```

**The skill ends here.** Do not proceed to implementation, commits, or PR creation.

---

## Important Notes

- Only create a branch — do not write code, stage files, or commit.
- Branch names must be **lowercase ASCII kebab-case** under the `prefix/` segment. Slashes (`/`) are allowed only as the single separator after `prefix`.
- Always confirm with the user before creating the branch (except when an explicit fully-formed name was given).
- Never run `git push`, `git branch -D`, or any destructive command in this skill.
- If the user provides a description in Japanese, the **summary slug must still be in English** so the branch name is portable.
- When in doubt about prefix choice or summary wording, ask via `AskUserQuestion` rather than guessing.
- All user-facing output must be in Japanese.
