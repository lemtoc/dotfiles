{ pkgs, ... }:
{
  # zoxide, eza, fzf, direnv, starship are managed by programs.* modules (home/shell/*.nix)
  # gh is managed by programs.gh (home/gh.nix)
  # vscode is managed by programs.vscode (home/vscode.nix)
  home.packages = with pkgs; [
    # Language runtimes & package managers
    # node, bun, pnpm are provided by mise (programs.mise) — keep them OUT of nix
    go
    yarn
    deno
    uv
    fish
    # CLI tools
    awscli2
    bat
    fd
    ripgrep
    ni
    turbo
    fastfetch
    hyperfine
    lefthook
  ];
}
