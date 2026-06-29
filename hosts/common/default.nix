{
  username,
  lib,
  pkgs,
  ...
}:
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
        env = (old.env or { }) // {
          CGO_ENABLED = "1";
        };
      });
    })
  ];
  system.primaryUser = username;
  system.stateVersion = 6;

  # Keep fallback zsh startup lean; fish is the configured login shell.
  programs.zsh.enableGlobalCompInit = false;
  programs.zsh.enableBashCompletion = false;
  programs.zsh.promptInit = "";
  programs.fish.enable = true;
  environment.shells = [ pkgs.fish ];

  system.activationScripts.postActivation.text = lib.mkAfter ''
    currentShell=$(dscl . -read /Users/${username} UserShell 2>/dev/null || true)
    currentShell="''${currentShell#UserShell: }"
    targetShell="/run/current-system/sw/bin/fish"
    if [ "$currentShell" != "$targetShell" ]; then
      echo "setting ${username}'s login shell to fish..." >&2
      dscl . -create /Users/${username} UserShell "$targetShell"
    fi
  '';

  users.users.${username} = {
    name = username;
    home = "/Users/${username}";
    shell = pkgs.fish;
  };
}
