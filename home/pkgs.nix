{ pkgs, ... }:
{
  # fish, zoxide, eza, fzf, direnv are managed by programs.* modules (home/shell/*.nix)
  # gh is managed by programs.gh (home/gh.nix)
  # vscode is managed by programs.vscode (home/vscode.nix)
  home.packages = with pkgs; [
    # Language runtimes & package managers
    # node is provided by mise (programs.mise) — keep nodejs OUT of nix
    go
    pnpm
    yarn
    bun
    deno
    uv
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
