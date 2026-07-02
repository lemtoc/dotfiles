{ ... }:
{
  programs.direnv = {
    enable = true;
    enableZshIntegration = false; # handled via cache_eval + zsh-defer in zsh.nix
    nix-direnv.enable = true;
  };

  # With programs.direnv.config, the TOML generator double-escapes backslashes, which breaks log_format containing ANSI escape sequences.
  # By writing TOML directly, \u001B is correctly interpreted as an ESC character.
  xdg.configFile."direnv/direnv.toml".text = ''
    [global]
    hide_env_diff = true
    log_format = "\u001B[2mdirenv: %s\u001B[0m"
  '';
}
