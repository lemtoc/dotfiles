{ inputs, username, ... }:
{
  imports = [ inputs.home-manager.darwinModules.home-manager ];

  home-manager.useGlobalPkgs = true;
  home-manager.useUserPackages = true;
  home-manager.backupFileExtension = "backup";
  home-manager.extraSpecialArgs = { inherit inputs username; };
  home-manager.users.${username} = import ../../home;
}
