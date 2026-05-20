{ ... }:
{
  programs.mise = {
    enable = true;
    enableZshIntegration = false; # handled via cache_eval + zsh-defer in zsh.nix
  };
}
