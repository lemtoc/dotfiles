{ pkgs, ... }:
{
  # zoxide, eza, fzf, direnv, starship are managed by programs.* modules (home/shell/*.nix)
  # gh is managed by programs.gh (home/gh.nix)
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
    actionlint
    awscli2
    bat
    chezmoi
    fd
    ripgrep
    ni
    turbo
    fastfetch
    hyperfine
    lefthook
  ];
}
