---
name: review-merge
allowed-tools: Bash(bunx ulid), Bash(mkdir:*), Bash(ls:*), Bash(git rev-parse:*), Write(*), Read(*), Glob(*)
argument-hint: [prefix matching files in .review/]
description: Merge multiple review files in .review/ into a consolidated summary and review comments
---

## Your Task

Based on `$ARGUMENTS`, collect and consolidate review files from the `.review/` directory, and produce two Markdown files: a **Consolidated Summary** and **Review Comments**.

---

## Step 1: Collect Files from `.review/`

1. Determine the repository root: `REPO_ROOT=$(git rev-parse --show-toplevel)`
2. If `$ARGUMENTS` is provided, normalize it to a prefix and collect matching files from `$REPO_ROOT/.review/`:
   - Digits only or prefixed with `#` (e.g. `104`, `#104`) → prefix = `pr-{n}` → match `$REPO_ROOT/.review/pr-{n}-*.md`
   - Otherwise → use as-is → match `$REPO_ROOT/.review/{prefix}-*.md`
3. If `$ARGUMENTS` is empty, collect all `$REPO_ROOT/.review/*.md` files
4. **If 0–1 files are found**: Report "Insufficient review files for merging (2 or more required)" and **stop**

## Step 2: Read All Files and Meta-Review

1. Read all collected review files
2. Perform the following analysis:
   - Create a **reviewer legend table** (mapping A, B, C, ... to filenames)
   - Analyze all findings across reviewers and **group** identical/similar ones
   - Compare each reviewer's severity assessment
   - Determine **consensus severity** by majority vote (in case of a tie, adopt the higher severity)
   - Identify **disagreements** between reviewers
   - **Cross-reviewer line number verification**:
     - When multiple reviewers cite DIFFERENT line numbers for the same logical finding, read the actual source file to determine the correct line
     - When a finding refers to a named symbol (function / variable / component), grep the file with `Grep` to verify the cited line matches where that symbol is defined
     - When reviewers converge on line numbers that look diff-proximal (i.e., clustered around changed lines) but the finding concerns a function definition or existing handler, verify independently — multiple reviewers can make the same mistake by all looking at the diff
     - If the verified line differs from what reviewers cited, use the verified line in the output and silently correct

## Step 3: Output Two Files

1. Generate a ULID using the `bunx ulid` command
2. Ensure the directory exists with `mkdir -p "$REPO_ROOT/.review"` (use the `$REPO_ROOT` determined in Step 1)
3. Determine the prefix:
   - If `$ARGUMENTS` is provided: use it as-is for the prefix
   - If empty: use `all` as the prefix
4. Write the following two files to `$REPO_ROOT/.review/`

---

### Output 1: Consolidated Summary (`{prefix}-summary-{ulid}.md`)

```markdown
# {Target} レビュー統合サマリー

## レビュアー凡例

| 略称  | ファイル        |
| ----- | --------------- |
| **A** | `filename-a.md` |
| **B** | `filename-b.md` |

...

---

## 指摘一覧

`-` = 言及なし

| #   | 指摘内容   | A        | B   | ... | 推奨     | 備考     |
| --- | ---------- | -------- | --- | --- | -------- | -------- |
| 1   | 指摘の要約 | Critical | -   | ... | **High** | 補足情報 |

...

---

## レビュアー間の見解の違い

| #   | 論点 | 評価の分布 | 補足 |
| --- | ---- | ---------- | ---- |

...

---

## マージ前対応の推奨（全レビュアーの合意ベース）

### 必須対応（過半数が High/Critical）

1. ...

### 推奨対応（複数名が Medium 以上）

1. ...

### フォローアップ（issue化推奨）

1. ...
```

**Rules:**

- Consensus severity is determined by **majority vote**. In case of a tie, adopt the higher severity
- Findings raised by only one reviewer must be labeled `**X独自**` (X = reviewer's letter)
- The "Disagreements" section should only include findings where severity **differs by 2+ levels** or **mention/non-mention is split**
- Omit any section that has no applicable entries

---

### Output 2: Review Comments (`{prefix}-comments-{ulid}.md`)

```markdown
# {Target} レビューコメント

---

## MUST

### 1. 指摘タイトル

**`file.ts` L41-42, L120-126**

![must-badge](https://img.shields.io/badge/Review-MUST-red.svg)

会話調の日本語で説明。問題の背景、なぜ問題なのか、どう直すべきかを丁寧に書く。
コード例があれば添える。

---

## ASK

### N. 指摘タイトル

![ask-badge](https://img.shields.io/badge/Review-ASK-yellowgreen.svg)

...

---

## WANT

### N. 指摘タイトル

![want-badge](https://img.shields.io/badge/Review-WANT-purple.svg)

...

---

## IMO

### N. 指摘タイトル

![imo-badge](https://img.shields.io/badge/Review-IMO-orange.svg)

...

---

## NITS

### N. 指摘タイトル

![nits-badge](https://img.shields.io/badge/Review-NITS-green.svg)

...
```

**Severity → Section Mapping:**

| Consensus Severity | Comment Section                                                            |
| ------------------ | -------------------------------------------------------------------------- |
| Critical           | MUST                                                                       |
| High               | MUST                                                                       |
| Middle             | WANT or IMO (use judgment)                                                 |
| Low                | IMO or NITS (use judgment)                                                 |
| —                  | ASK (regardless of severity; when clarification or confirmation is needed) |

**Comment Style Rules:**

- Place the corresponding **badge image** on the first line of the comment body (the line after file + line reference):
  - MUST: `![must-badge](https://img.shields.io/badge/Review-MUST-red.svg)`
  - ASK: `![ask-badge](https://img.shields.io/badge/Review-ASK-yellowgreen.svg)`
  - WANT: `![want-badge](https://img.shields.io/badge/Review-WANT-purple.svg)`
  - IMO: `![imo-badge](https://img.shields.io/badge/Review-IMO-orange.svg)`
  - NITS: `![nits-badge](https://img.shields.io/badge/Review-NITS-green.svg)`
- Use a **conversational tone** addressing the reviewee directly (e.g., 「〜お願いします」「〜になっています」)
- Explain in the order: **problem → cause → suggested fix**
- Include concrete **code examples** whenever possible
- Include findings unique to a single reviewer if useful (but use a softer tone)
- **Omit** sections with no findings
- Use **sequential numbering** across the entire file

---

## Output Examples

Below are output examples based on a fictional PR #462 (adding auth token refresh functionality).

### Example 1: Consolidated Summary

```markdown
# PR #462 レビュー統合サマリー

## レビュアー凡例

| 略称  | ファイル                  |
| ----- | ------------------------- |
| **A** | `pr462-review-01JQ3XK.md` |
| **B** | `pr462-review-01JQ4YM.md` |
| **C** | `pr462-review-01JQ5ZN.md` |

---

## 指摘一覧

`-` = 言及なし

| #   | 指摘内容                                                          | A        | B        | C      | 推奨         | 備考             |
| --- | ----------------------------------------------------------------- | -------- | -------- | ------ | ------------ | ---------------- |
| 1   | リフレッシュトークンが localStorage に平文保存されている          | Critical | Critical | High   | **Critical** | 全員が指摘       |
| 2   | トークン期限切れ時のリトライで無限ループの可能性                  | High     | High     | -      | **High**     | C は言及なし     |
| 3   | `refreshToken()` の戻り値が未検証のまま使用                       | Middle   | High     | Middle | **Middle**   | B のみ High 評価 |
| 4   | エラーハンドリングで元の例外情報が失われている                    | -        | Middle   | -      | **B独自**    | B のみの指摘     |
| 5   | token の型定義が `string \| undefined` だが null チェックが不統一 | Low      | Low      | Low    | **Low**      | 全員一致         |
| 6   | `MAX_RETRY_COUNT` がマジックナンバーのまま                        | -        | -        | Low    | **C独自**    | C のみの指摘     |

---

## レビュアー間の見解の違い

| #   | 論点                      | 評価の分布                          | 補足                                                        |
| --- | ------------------------- | ----------------------------------- | ----------------------------------------------------------- |
| 1   | localStorage への平文保存 | A: Critical / B: Critical / C: High | C は httpOnly Cookie への移行をフォローアップで可とする立場 |

---

## マージ前対応の推奨（全レビュアーの合意ベース）

### 必須対応（過半数が High/Critical）

1. **#1** リフレッシュトークンの保存方法を httpOnly Cookie または暗号化に変更する
2. **#2** リトライ上限を設け、超過時は明示的にログアウトフローへ遷移させる

### 推奨対応（複数名が Medium 以上）

1. **#3** `refreshToken()` の戻り値を検証し、失敗時のフォールバックを追加する

### フォローアップ（issue化推奨）

1. **#5** token 型の null/undefined チェックを統一する
2. **#6** リトライ上限を定数として抽出する
```

### Example 2: Review Comments

```markdown
# PR #462 レビューコメント

---

## MUST

### 1. リフレッシュトークンを localStorage に平文で保存しない

**`src/auth/tokenStore.ts` L18-22**

![must-badge](https://img.shields.io/badge/Review-MUST-red.svg)

現在、リフレッシュトークンが `localStorage.setItem("refresh_token", token)` で平文保存されています。XSS 攻撃を受けた場合にトークンが漏洩するリスクがあります。

httpOnly Cookie に移行するか、少なくとも暗号化した上で保存するようにお願いします。

`ts
// Before
localStorage.setItem("refresh_token", token);

// After
await cookieStore.set({
name: "refresh_token",
value: token,
httpOnly: true,
secure: true,
sameSite: "strict",
});
`

### 2. トークンリフレッシュのリトライで無限ループが発生しうる

**`src/auth/refreshToken.ts` L41-42, L55-60**

![must-badge](https://img.shields.io/badge/Review-MUST-red.svg)

`refreshToken()` が失敗した場合に自身を再帰呼び出ししていますが、脱出条件がないため無限ループになる可能性があります。リトライ上限を設けて、超過時はログアウトフローに遷移させるのが安全です。

`ts
// Before
const refresh = async (): Promise<string> => {
try {
return await requestNewToken();
} catch {
return refresh(); // 無限ループの可能性
}
};

// After
const MAX_RETRY = 3;

const refresh = async (attempt = 0): Promise<string> => {
if (attempt >= MAX_RETRY) {
logout();
throw new AuthError("Token refresh failed after max retries");
}
try {
return await requestNewToken();
} catch {
return refresh(attempt + 1);
}
};
`

---

## WANT

### 3. `refreshToken()` の戻り値を検証する

**`src/auth/useAuth.ts` L120-126**

![want-badge](https://img.shields.io/badge/Review-WANT-purple.svg)

`refreshToken()` の結果を検証せずにそのまま `setAccessToken()` に渡しています。API が空文字列や不正な形式のトークンを返すケースを考慮して、バリデーションを挟むと安全性が向上します。

---

## NITS

### 4. `MAX_RETRY_COUNT` を定数に切り出す

**`src/auth/refreshToken.ts` L3**

![nits-badge](https://img.shields.io/badge/Review-NITS-green.svg)

リトライ上限を `3` のマジックナンバーで書くより、名前付き定数にしておくと意図が伝わりやすくなります。
```

---

## Important Notes

- Always write output in **Japanese**
- Always resolve the repository root with `git rev-parse --show-toplevel` and create `.review/` there (do NOT use a relative path)
- After output is complete, report the paths of both files to the user
- Display the following message so the user can easily resume this session later:
  ```
  To resume this session later: /rename {ulid}
  ```
  Replace `{ulid}` with the actual ULID generated in Step 3.
