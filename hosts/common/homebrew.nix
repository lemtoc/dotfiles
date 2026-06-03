{ ... }:
{
  homebrew = {
    enable = true;
    onActivation = {
      cleanup = "zap";
      autoUpdate = true;
      upgrade = true;
      extraFlags = [ "--force-cleanup" ];
    };
    taps = [
      "dimentium/autoraise"
      "k1low/tap"
      "kayac/tap"
      "lemtoc/tap"
      "manaflow-ai/cmux"
      "productdevbook/tap"
    ];
    brews = [
      "create-dmg"
      "k1low/tap/git-wt"
      "k1low/tap/mo"
      "kayac/tap/ecspresso"
      "lemtoc/tap/muu"
    ];
    casks = [
      "1password"
      "adobe-creative-cloud"
      "alt-tab"
      "arc"
      "dimentium/autoraise/autoraiseapp"
      "azookey"
      "codex"
      "cursor"
      "dbeaver-community"
      "docker-desktop"
      "figma"
      "font-udev-gothic"
      "font-udev-gothic-nf"
      "ghostty"
      "google-chrome"
      "jordanbaird-ice@beta"
      "karabiner-elements"
      "logi-options+"
      "microsoft-office"
      "notion"
      "postman"
      "raycast"
      "rectangle"
      "session-manager-plugin"
      "slack"
      "visual-studio-code"
      "zoom"
      "manaflow-ai/cmux/cmux"
      "productdevbook/tap/portkiller"
    ];
  };
}
