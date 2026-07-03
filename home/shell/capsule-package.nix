{ inputs, pkgs }:

pkgs.rustPlatform.buildRustPackage {
  pname = "capsule";
  version = "0.3.0-local";

  src = inputs.capsule-src;
  cargoLock.lockFile = inputs.capsule-src + "/Cargo.lock";

  # Local prompt iteration should not make every home-manager switch run the
  # full upstream test suite. Tests are run manually while changing the fork.
  doCheck = false;

  meta = {
    description = "zsh prompt engine from local capsule fork";
    mainProgram = "capsule";
  };
}
