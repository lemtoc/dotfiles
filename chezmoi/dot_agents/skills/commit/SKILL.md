---
name: commit
description: Create a git commit following the Conventional Commits specification. Use when the user wants to commit staged changes, create a commit message, or run git commit. Handles commit message language detection (English/Japanese) based on recent commits.
---

## Commit Workflow

1. Inspect the repository state before committing:
   - `git status --short`
   - `git diff --staged`
   - `git log -n 10 --pretty=format:%s`
   - `git branch --show-current`
2. Commit only staged changes. Do not run `git add` unless the user explicitly asks.
3. If unstaged changes exist, leave them untouched and mention them after the commit.
4. Check staged changes for secrets, broken partial edits, or obviously wrong files. If found, stop and ask the user.
5. Choose the commit message language from recent commits unless the user specifies one.
6. Run `git commit` and verify with `git status --short`.

## Commit Message

- Use Conventional Commits: `<type>(scope): <description>`.
- Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
- Keep the summary imperative and under about 72 characters.
- Use the same language as the majority of recent commits unless the user specifies one.
- For Japanese commit messages, the scope may also be Japanese, e.g. `feat(認証): OAuth2 ログインを追加`.
- Always include a body.
- Write the body as bullet points.
- Do not insert blank lines between bullet points.
- Separate the final body bullet from the `Co-authored-by` trailer with exactly one blank line.
- Be specific about what changed. Avoid vague wording like "minor fix" or "review comments".
- Immediately before `git commit`, run `rg '^(model|model_reasoning_effort) =' ~/.codex/config.toml` and read the current values.
- Format the model for display: uppercase the product prefix, keep the prefix and numeric version hyphenated, then replace later hyphens with spaces and capitalize each word. For example, `gpt-5.6-terra` becomes `GPT-5.6 Terra` and `gpt-5.6-sol` becomes `GPT-5.6 Sol`.
- Format the reasoning effort by replacing hyphens or underscores with spaces and capitalizing each word. For example, `xhigh` becomes `Xhigh` and `ultra` becomes `Ultra`.
- Append `Co-authored-by: Codex <formatted model> <formatted reasoning effort> <noreply@openai.com>` as the final trailer. Omit the reasoning effort and its preceding space when it is absent. Examples: `Co-authored-by: Codex GPT-5.6 Terra Xhigh <noreply@openai.com>` and `Co-authored-by: Codex GPT-5.6 Sol Ultra <noreply@openai.com>`.

## Command Notes

- Prefer a single commit message body string or a message file so bullet points stay contiguous.
- If using heredoc, use single-quoted heredoc (`<<'EOF'`) when the message contains backticks.
- Do not push.
