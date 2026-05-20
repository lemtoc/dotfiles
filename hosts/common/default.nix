{ lib, ... }:
{
  imports = [
    ./home-manager.nix
    ./homebrew.nix
    ./macos
  ];
  # Determinate Nix manages the daemon, so disable nix-darwin's management
  nix.enable = false;
  # TODO: Remove this overlay once nixpkgs fixes direnv (CGO_ENABLED mismatch)
  # Workaround: direnv 2.37.1 in nixpkgs uses -linkmode=external but sets CGO_ENABLED=0
  nixpkgs.overlays = [
    (final: prev: {
      direnv = prev.direnv.overrideAttrs (old: {
        env = (old.env or { }) // { CGO_ENABLED = "1"; };
      });
    })
  ];
  # Allow only explicitly listed unfree packages (e.g. vscode)
  nixpkgs.config.allowUnfreePredicate =
    pkg:
    builtins.elem (lib.getName pkg) [
      "vscode"
    ];
  system.primaryUser = "lemtoc";
  system.stateVersion = 6;

  # nix-darwin's /etc/zshrc runs compinit + bashcompinit + promptinit synchronously (~47ms).
  # These are redundant because our user config handles compinit via zsh-defer and starship replaces promptinit.
  programs.zsh.enableGlobalCompInit = false;
  programs.zsh.enableBashCompletion = false;
  programs.zsh.promptInit = "";

  users.users.lemtoc = {
    name = "lemtoc";
    home = "/Users/lemtoc";
  };
}
