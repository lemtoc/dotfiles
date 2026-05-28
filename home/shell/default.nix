{ ... }:
{
  imports = [
    ./zsh.nix
    ./starship.nix
    ./zoxide.nix
    ./direnv.nix
    ./mise.nix
    ./eza.nix
    ./fzf.nix
  ];

  # Hardcoded output of `brew shellenv` to avoid spawning brew binary (~15ms).
  # The output is constant on Apple Silicon, so safe to inline.
  programs.zsh.profileExtra = ''
    export HOMEBREW_PREFIX="/opt/homebrew"
    export HOMEBREW_CELLAR="/opt/homebrew/Cellar"
    export HOMEBREW_REPOSITORY="/opt/homebrew"
    export PATH="/opt/homebrew/bin:/opt/homebrew/sbin''${PATH:+:''${PATH}}"
    export MANPATH="/opt/homebrew/share/man''${MANPATH:+:''${MANPATH}}:"
    export INFOPATH="/opt/homebrew/share/info:''${INFOPATH:-}"
  '';

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
    HOMEBREW_FORBIDDEN_FORMULAE = "node npm pnpm yarn bun deno go awscli bat direnv eza fastfetch fd fzf gh lefthook mise starship turbo zoxide claude ripgrep";
    ZENO_HOME = "$HOME/.config/zeno";
  };
}
