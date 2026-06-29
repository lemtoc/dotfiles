{ ... }:
{
  imports = [
    ./pkgs.nix
    ./git.nix
    ./gh.nix
    ./ssh.nix
    ./shell
    ./aws.nix
    ./muu.nix
  ];
  home.stateVersion = "25.11";
}
