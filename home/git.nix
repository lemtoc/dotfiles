{ ... }:
{
  programs.git = {
    enable = true;

    signing = {
      key = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIF+zJB91Fifv36IetC+AhWcBE+a9poI/U+A6MlLfABoa";
      signByDefault = true;
      format = "ssh";
      signer = "/Applications/1Password.app/Contents/MacOS/op-ssh-sign";
    };

    settings = {
      user = {
        name = "lemtoc";
        email = "83203852+lemtoc@users.noreply.github.com";
      };
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
    ];
  };
}
