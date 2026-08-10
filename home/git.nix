{
  config,
  lib,
  pkgs,
  ...
}:
let
  gitVersion = "2.55.0";

  userEmail = "83203852+lemtoc@users.noreply.github.com";

  # ローカルで `git log --show-signature` を通すための信頼済み公開鍵。
  # 鍵の実体は不要なので、そのホストに存在しない鍵も載せてよい。
  # 過去のコミットを検証できなくなるため、移行しても古い鍵は消さないこと。
  allowedSignerKeys = [
    # 1Password (M4Air / 移行前の M4Pro)
    "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIF+zJB91Fifv36IetC+AhWcBE+a9poI/U+A6MlLfABoa"
    # Secure Enclave (M4Pro) — docs/secure-enclave-signing.md
    "sk-ecdsa-sha2-nistp256@openssh.com AAAAInNrLWVjZHNhLXNoYTItbmlzdHAyNTZAb3BlbnNzaC5jb20AAAAIbmlzdHAyNTYAAABBBE3fdVRsCoAJtcjjG+is4FILynjzM42+czwaeQfBiuP+8Kr/8YGe/zh/6pYG2v7ARKrywp+XHcv+d7Y1+E7wSOIAAAAEc3NoOg=="
  ];
  allowedSignersFile = "${config.home.homeDirectory}/.ssh/allowed_signers";
in
{
  home.file.".ssh/allowed_signers".text = lib.concatMapStrings (
    key: "${userEmail} ${key}\n"
  ) allowedSignerKeys;

  programs.git = {
    enable = true;
    package = pkgs.git.overrideAttrs (oldAttrs: {
      version = gitVersion;
      src = pkgs.fetchurl {
        url = "https://www.kernel.org/pub/software/scm/git/git-${gitVersion}.tar.xz";
        hash = "sha256-RX/bBNyHKOAH1GiGleaRLm9oByeSDypAvxHqzBdQU1c=";
      };
      patches = builtins.filter (
        patch:
        !(pkgs.lib.hasInfix "expect-gui--askyesno-failure-in-t1517.patch" "${patch}")
        && !(pkgs.lib.hasInfix "osxkeychain-link-rust_lib.patch" "${patch}")
      ) oldAttrs.patches;
      meta = oldAttrs.meta // {
        changelog = "https://github.com/git/git/blob/v${gitVersion}/Documentation/RelNotes/${gitVersion}.adoc";
      };
    });

    # 既定は 1Password の SSH agent。Secure Enclave に移行済みのホストは
    # hosts/<hostname>/default.nix で key/signer を上書きする。
    # 詳細は docs/secure-enclave-signing.md
    signing = {
      key = lib.mkDefault "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIF+zJB91Fifv36IetC+AhWcBE+a9poI/U+A6MlLfABoa";
      signByDefault = true;
      format = "ssh";
      signer = lib.mkDefault "/Applications/1Password.app/Contents/MacOS/op-ssh-sign";
    };

    settings = {
      user = {
        name = "lemtoc";
        email = userEmail;
      };
      gpg.ssh.allowedSignersFile = allowedSignersFile;
      init.defaultBranch = "main";
      pull.ff = "only";
      push.autoSetupRemote = true;
      wt = {
        basedir = "../{gitroot}-worktrees";
        copyignored = true;
        copyuntracked = true;
        copymodified = true;
        hook = "ni";
      };
    };

    ignores = [
      ".DS_Store"
      "*.log"
      "node_modules/"
      "dist/"
      "*.swp"
      "**/.claude/settings.local.json"
      "**/.codex/"
      "**/CLAUDE.local.md"
      "**/.serena/"
      "**/.review/"
      "**/.docs/"
      "**/.env.stg"
      "**/.env.dev"
      "**/.pnpm-store/"
      "**/.envrc"
      "**/.playwright-mcp/"
      "**/mise.local.toml"
    ];
  };
}
