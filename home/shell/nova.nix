{ inputs, pkgs, ... }:
let
  novaPackage = inputs.nova.packages.${pkgs.stdenv.hostPlatform.system}.default;
in
{
  home.packages = [
    novaPackage
  ];
}
