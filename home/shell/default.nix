{ ... }:
{
  imports = [
    ./fish.nix
    ./zoxide.nix
    ./direnv.nix
    ./mise.nix
    ./eza.nix
    ./fzf.nix
  ];

  home.sessionPath = [
    "$HOME/bin"
    "$HOME/.local/bin"
    "$HOME/.local/share/mise/shims"
  ];

  home.sessionVariables = {
    LANG = "en_US.UTF-8";
    EDITOR = "vim";
    GH_PAGER = "less -RFX";
    PAGER = "less -RFX";
    PINACT_KEYRING_ENABLED = "true";
    HOMEBREW_FORBIDDEN_FORMULAE = "node npm pnpm yarn bun deno go awscli bat direnv eza fastfetch fd fzf gh lefthook mise turbo zoxide claude ripgrep";
  };
}
