# Secure Enclave によるコミット署名

Git のコミット署名鍵を macOS の Secure Enclave で管理する。1Password の SSH agent
(`op-ssh-sign`) からの移行。**署名のみ**が対象で、push/pull の SSH 認証は 1Password のまま。

参考: <https://www.mizdra.net/entry/2026/08/07/101542>

## 仕組み

- `sc_auth` で Secure Enclave 内に CTK identity (秘密鍵 + 自己署名証明書) を作る。
- `/usr/lib/ssh-keychain.dylib` が、その identity を **FIDO セキュリティキー**として
  OpenSSH に見せる。鍵タイプは `sk-ecdsa-sha2-nistp256@openssh.com`。
- `ssh-keygen` に `SSH_SK_PROVIDER` で dylib を教えるだけなので、**常駐エージェントは不要**
  (Secretive のような GUI アプリも login item も要らない)。
- `~/.ssh/id_git_sign` は鍵ハンドルであって秘密鍵ではない。秘密鍵は Secure Enclave から出せない。

### 前提

- macOS 14 (Sonoma) 以降。動作確認は macOS 26.5.2 / OpenSSH 10.2p1。
- **`ssh-keygen` は常に `/usr/bin/ssh-keygen` (Apple ビルド) を絶対パスで呼ぶこと。**
  `ssh-keychain.dylib` は Apple ビルドの OpenSSH と組み合わせる前提で、nix の `pkgs.openssh`
  では動く保証がない。現状 `ssh-keygen` は PATH 上に `/usr/bin` のものしか無いので bare でも
  同じだが、将来 nix 側で openssh を入れると静かに壊れる。

## 現在の構成

| 項目 | 値 |
|---|---|
| ホスト | M4Pro のみ (M4Air は 1Password のまま) |
| identity label | `git-sign` |
| public key hash (SHA1) | `D93C59C037113F3418EAAB2E4EA5277EB34DCE1B` |
| SSH fingerprint | `SHA256:AsbsNi30tI7r4kUqNSHew9DI86raUYeHeYP3MLCjpck` |
| 証明書有効期限 | **2036/08/07** (作成時は 2027/08/10 = 1年。下記手順で10年に更新済み) |
| GitHub signing key | id=1103015 `Secure Enclave (M4Pro, signing)` |

### 移行の進捗

| ステップ | 状態 |
|---|---|
| Secure Enclave に鍵作成 | 完了 |
| `~/.ssh/id_git_sign{,.pub}` 配置 | 完了 |
| GitHub に Signing Key 登録・`verified=true` 確認 | 完了 |
| 証明書を10年に更新 (2036/08/07) | 完了 |
| `home/git.nix` の切り替え | **未実施** (まだ `op-ssh-sign` を使っている) |

### git 側の設定 (切り替え時)

`ssh-keygen` に `SSH_SK_PROVIDER` を渡すラッパーが要る。git は `gpg.ssh.program` に
環境変数を渡せないため。

```sh
#!/bin/sh
export SSH_SK_PROVIDER=/usr/lib/ssh-keychain.dylib
exec /usr/bin/ssh-keygen "$@"
```

`user.signingkey` は 1Password 時代のリテラル公開鍵ではなく、**ハンドルファイルのパス**
(`~/.ssh/id_git_sign`) を指定する。sk 鍵はハンドルが無いと署名できない。

この鍵は M4Pro にしか存在しないので、`home/git.nix` (全ホスト共有) に直接書くと
**M4Air が次の rebuild でコミット不能になる**。ホスト別に分けること。

### GitHub 側の不変条件

**旧 signing key `id=805051` "1Password (signing)" (ssh-ed25519) は削除しないこと。**
削除すると、その鍵で署名した過去のコミットがすべて Unverified に落ちる。
鍵をローテーションした場合も同様に、古い登録は残したまま新しい鍵を追加する。

## 新規セットアップ

```bash
# 1. Secure Enclave に鍵を作る
#    -k p-256-ne : ECDSA P-256 / non-exportable (Secure Enclave は P-256 のみ対応)
#    -t none     : Touch ID を要求しない (-t bio にするとコミットのたびに Touch ID)
sc_auth create-ctk-identity -l git-sign -k p-256-ne -t none -N git-sign

# 2. SSH 鍵ハンドルを書き出す (カレントディレクトリに生成されるので注意)
cd "$(mktemp -d)"
/usr/bin/ssh-keygen -w /usr/lib/ssh-keychain.dylib -K -N ""
mv id_ecdsa_sk_rk     ~/.ssh/id_git_sign
mv id_ecdsa_sk_rk.pub ~/.ssh/id_git_sign.pub

# 3. GitHub に Signing Key として登録する
#    Authentication key の枠に入れても署名検証は有効にならない
gh api -X POST /user/ssh_signing_keys \
  -f title="Secure Enclave ($(scutil --get LocalHostName), signing)" \
  -f key="$(cat ~/.ssh/id_git_sign.pub)"
```

`-t none` でも署名には FIDO の user-presence フラグが立つため、`allowed_signers` に
`no-touch-required` を付ける必要はない (付けると OpenSSH が `unknown key option` で落ちる)。

作成直後の証明書は**有効期限が1年**しかないので、続けて「証明書の更新」を実行して
10年に伸ばしておくこと。

## 証明書の更新

### 期限の正体

期限切れになるのは **Secure Enclave の鍵そのものではなく、CTK identity をラップする
X.509 証明書**。`sc_auth` に有効期間を指定するオプションは無く、作成から**1年固定**。

SSH はこの証明書を使わない (生の公開鍵しか見ない) ので、**証明書を差し替えても SSH 公開鍵は
変わらない**。よって GitHub 側の再登録は不要。

この identity は既に10年証明書 (2036/08/07) に更新済みなので、当面この作業は不要。
新しいマシンで作り直したときは、作成直後に一度この手順を通しておくとよい。

期限切れ後の挙動は未確認。`man ssh-keychain` に

> By default, all **valid** ... identities from all SmartCards and persistent tokens
> currently available in the system are provided.

とあり、期限切れの identity が OpenSSH に提供されなくなる可能性がある。`-t none` にしている
ため Touch ID の失敗としては現れず、**ある日いきなり `git commit` が署名エラーで落ちる**
形になる。`commit.gpgsign = true` なのでコミットが一切できなくなる。

### 手順

```bash
# 1. 更新前の状態を控える (あとで fingerprint 不変を確認するため)
sc_auth list-ctk-identities
sc_auth list-ctk-identities -t ssh

# 2. CSR を作る
#    -h に渡すのは list-ctk-identities のデフォルト表示 = SHA1 (40桁)。
#    -t sha256 -e hex の値を渡すと "No identity found for hash" で落ちる。
HASH=D93C59C037113F3418EAAB2E4EA5277EB34DCE1B
cd "$(mktemp -d)"
sc_auth create-ctk-csr -h "$HASH" -f renew.csr -N git-sign

# 3. 使い捨て CA で 10 年署名する
#    証明書は識別のための入れ物にすぎず、SSH の信頼には一切関与しない。
#    LibreSSL の openssl x509 -req に -subj は無い。CN は手順 2 の -N で入れる。
openssl req -x509 -newkey rsa:2048 -keyout ca.key -out ca.crt \
  -days 3650 -nodes -subj "/CN=git-sign-ca"
openssl x509 -req -in renew.csr -CA ca.crt -CAkey ca.key -CAcreateserial \
  -out renew.crt -days 3650

# 4. 取り込む
sc_auth import-ctk-certificate -f renew.crt

# 5. Valid To が伸び、public key hash / SSH fingerprint が変わっていないことを確認
sc_auth list-ctk-identities
sc_auth list-ctk-identities -t ssh
```

### go/no-go 検証 (必須)

手順 5 の `Valid=YES` は `sc_auth` の見解であって、`ssh-keychain.dylib` が同じ判断をするとは
限らない。**既存のハンドルで実際に署名できることを確認するまで、更新は完了とみなさないこと。**

```bash
export SSH_SK_PROVIDER=/usr/lib/ssh-keychain.dylib
cd "$(mktemp -d)"
printf 'renew check\n' > msg.txt
/usr/bin/ssh-keygen -Y sign -f ~/.ssh/id_git_sign -n git msg.txt
printf '%s %s\n' "$(git config user.email)" "$(cat ~/.ssh/id_git_sign.pub)" > allowed_signers
/usr/bin/ssh-keygen -Y verify -f allowed_signers -I "$(git config user.email)" \
  -n git -s msg.txt.sig < msg.txt
```

`Good "git" signature` が出れば成功。失敗した場合は下の「identity 再作成」に進む。

## フォールバック: identity 再作成

証明書更新が効かない場合は identity ごと作り直す。この場合 **SSH 公開鍵が変わる**ので
GitHub への再登録が必要になる。

```bash
# 1. 先に古い identity を削除する ★重要
#    identity が 2 本あると ssh-keygen -K が両方を同じ id_ecdsa_sk_rk に書こうとして
#    上書きプロンプトで詰まる。KEYCHAIN_CERTIFICATES で絞る方法は -w の Secure Key 経路では
#    効かなかった。
sc_auth delete-ctk-identity -h D93C59C037113F3418EAAB2E4EA5277EB34DCE1B

# 2. 「新規セットアップ」を最初からやり直す

# 3. GitHub の古い signing key は削除しないこと (過去コミットが Unverified になる)
gh api /user/ssh_signing_keys --jq '.[] | "\(.id)\t\(.title)"'
```

## 動作確認

```bash
# ローカル
git log --show-signature -1

# GitHub 側 (Verified バッジが付くか)
gh api /repos/<owner>/<repo>/commits/<sha> --jq '.commit.verification'
# => {"verified": true, "reason": "valid", ...}
```

`gh` で signing key を操作するには `admin:ssh_signing_key` スコープが要る:

```bash
gh auth refresh -h github.com -s admin:ssh_signing_key
```

## トラブルシューティング

| 症状 | 原因 |
|---|---|
| `No identity found for hash` | `-h` に SHA256 を渡している。SHA1 (40桁) を使う |
| `ssh-keygen -K` が上書きプロンプトで止まる | CTK identity が複数ある。不要なものを削除する |
| `allowed_signers:1: bad options: unknown key option` | `no-touch-required` を書いている。不要 |
| コミットが署名エラーで落ちる | `~/.ssh/id_git_sign` の消失、`ssh-keychain.dylib` のパス変更、identity の消失を先に疑う。`sc_auth list-ctk-identities` で存在と `Valid` を確認 |
| nix で openssh を入れた直後に壊れた | `ssh-keygen` が nix 側に解決されている。`/usr/bin/ssh-keygen` を絶対パスで呼ぶ |

## 検証済み/未検証の区別

このドキュメントのうち実測で確認したもの:

- 新規セットアップ一式 (鍵作成 → 書き出し → 署名 → 検証 → GitHub で `verified=true`)
- 証明書更新の全工程を本番 identity `git-sign` で実行し、以下を確認 (2026-08-10):
  - 有効期限が 2027/08/10 → 2036/08/07 に伸びた
  - public key hash / SSH fingerprint / CN が**すべて不変**
  - **更新後も既存ハンドルで署名でき**、`ssh-keygen -Y verify` と `git log --show-signature` が通る
  - 更新後のコミットを push して GitHub 側も `verified=true` / `reason=valid`
  - → CA 署名の証明書を import しても `ssh-keychain.dylib` は identity を提供し続ける
- ハッシュ形式の罠、`-K` のファイル名衝突、`no-touch-required` が弾かれること

未検証:

- 証明書が期限切れになったときに実際どうなるか (10年更新済みなので当面到達しない)
- `sc_auth` が発行する自己署名証明書以外を入れた状態での、SSH 以外の用途 (smartcard ログイン等)
  への影響。ここでは署名にしか使っていないため未確認
