{ inputs, ... }:
{
  imports = [ inputs.home-manager.darwinModules.home-manager ];

  home-manager.useGlobalPkgs = true;
  home-manager.useUserPackages = true;
  home-manager.backupFileExtension = "backup";
  home-manager.users.lemtoc = import ../../home;
}
