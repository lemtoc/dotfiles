{
  description = "lemtoc's dotfiles";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    nix-darwin = {
      url = "github:LnL7/nix-darwin";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs =
    inputs@{
      nixpkgs,
      nix-darwin,
      ...
    }:
    let
      system = "aarch64-darwin";
      pkgs = nixpkgs.legacyPackages.${system};
      mkDarwinConfig =
        { hostName, username }:
        nix-darwin.lib.darwinSystem {
          specialArgs = { inherit inputs username; };
          modules = [
            {
              networking.hostName = hostName;
              networking.computerName = hostName;
              nixpkgs.hostPlatform = system;
            }
            ./hosts/common
            ./hosts/${hostName}
          ];
        };
    in
    {
      darwinConfigurations."M4Pro" = mkDarwinConfig {
        hostName = "M4Pro";
        username = "t1190078";
      };
      darwinConfigurations."M4Air" = mkDarwinConfig {
        hostName = "M4Air";
        username = "lemtoc";
      };
      formatter.${system} = pkgs.nixfmt-tree;

      apps.${system} = {
        update = {
          type = "app";
          program = toString (
            pkgs.writeShellScript "flake-update" ''
              set -e
              echo "Updating flake.lock..."
              nix flake update --flake "$HOME/.dotfiles"
              echo "Done! Run 'nix run .#switch' to apply changes."
            ''
          );
        };
        switch = {
          type = "app";
          program = toString (
            pkgs.writeShellScript "darwin-switch" ''
              set -eo pipefail
              HOST_NAME=$(scutil --get LocalHostName)
              echo "Updating Homebrew..."
              /opt/homebrew/bin/brew update
              echo "Building and switching to darwin configuration for $HOST_NAME..."
              sudo nix run nix-darwin -- switch --flake "$HOME/.dotfiles#$HOST_NAME"
              echo "Done!"
            ''
          );
        };
        build = {
          type = "app";
          program = toString (
            pkgs.writeShellScript "darwin-build" ''
              set -e
              HOST_NAME=$(scutil --get LocalHostName)
              echo "Building darwin configuration for $HOST_NAME..."
              ${pkgs.nix-output-monitor}/bin/nom build "$HOME/.dotfiles#darwinConfigurations.$HOST_NAME.system"
              echo "Build successful! Run 'nix run .#switch' to apply."
            ''
          );
        };
      };
    };
}
