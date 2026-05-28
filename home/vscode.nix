{ ... }:
{
  programs.vscode = {
    enable = true;
    # Install Visual Studio Code with Homebrew; keep Home Manager for settings only.
    package = null;
    profiles.default = {
      userSettings = builtins.fromJSON (builtins.readFile ./vscode/settings.json);
      keybindings = builtins.fromJSON (builtins.readFile ./vscode/keybindings.json);
    };
  };
}
