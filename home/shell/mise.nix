{ pkgs, ... }:
let
  miseVersion = "2026.5.12";
  # Upstream ships precompiled binaries; building from source via
  # rustPlatform.buildRustPackage takes 30+ minutes and is uncacheable on
  # cache.nixos.org, so we wrap the official release tarball instead.
  miseBin = pkgs.stdenv.mkDerivation {
    pname = "mise-bin";
    version = miseVersion;
    src = pkgs.fetchurl {
      url = "https://github.com/jdx/mise/releases/download/v${miseVersion}/mise-v${miseVersion}-macos-arm64.tar.gz";
      hash = "sha256-W4g8hooHSN0MWV0w/QAOxRON+r3u8sMCIoZuvzSvGuM=";
    };
    dontConfigure = true;
    dontBuild = true;
    installPhase = ''
      runHook preInstall
      install -Dm755 bin/mise $out/bin/mise
      runHook postInstall
    '';
    meta.mainProgram = "mise";
  };
in
{
  programs.mise = {
    enable = true;
    package = miseBin;
    enableFishIntegration = true;
    enableZshIntegration = false;
    globalConfig = {
      tools = {
        bun = "latest";
        node = "lts";
        pnpm = "latest";
      };
    };
  };
}
