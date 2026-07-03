{ inputs, pkgs, ... }:
let
  capsulePackage = import ./capsule-package.nix { inherit inputs pkgs; };
in
{
  home.packages = [
    capsulePackage
  ];

  xdg.configFile."capsule/config.toml".source = ./capsule.toml;
}
