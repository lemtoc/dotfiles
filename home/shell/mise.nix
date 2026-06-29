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
      settings = {
        github = {
          credential_command = "gh auth token";
        };
        status = {
          show_env = true;
        };
      };
      tools = {
        bun = "latest";
        node = "lts";
        pnpm = "latest";
        pinact = "latest";
        "github:lemtoc/awsctx" = "latest";
      };
      # EC2 (dpca-ide) 操作タスク。
      # インスタンス ID は PUBLIC リポジトリに載せたくないので git 管理外の
      # ~/.config/dpca/instance-id から読み込む(下記コメント参照)。
      tasks = {
        "aws:login" = {
          description = "SSO login for the dpca-ide profile";
          run = ''aws sso login --profile dpca-ide'';
        };
        "aws:whoami" = {
          description = "Show the caller identity for the dpca-ide profile";
          run = ''aws sts get-caller-identity --profile dpca-ide'';
        };
        "ec2:start" = {
          description = "Start the dpca-ide EC2 instance";
          run = ''aws ec2 start-instances --instance-ids "$(cat "$HOME/.config/dpca/instance-id")" --profile dpca-ide --region ap-northeast-1'';
        };
        "ec2:stop" = {
          description = "Stop the dpca-ide EC2 instance";
          run = ''aws ec2 stop-instances --instance-ids "$(cat "$HOME/.config/dpca/instance-id")" --profile dpca-ide --region ap-northeast-1'';
        };
        "ec2:ssh" = {
          description = "SSH into the dpca-ide EC2 instance";
          run = ''ssh dpca-ide'';
        };
        "ec2:connect" = {
          description = "Start (if needed), wait for SSM, then SSH into dpca-ide";
          run = ''
            id="$(cat "$HOME/.config/dpca/instance-id")"
            state="$(aws ec2 describe-instances --instance-ids "$id" --query 'Reservations[].Instances[].State.Name' --output text --profile dpca-ide --region ap-northeast-1)"
            echo "current state: $state"
            if [ "$state" = "stopping" ]; then
              echo "instance is stopping, waiting until fully stopped..."
              aws ec2 wait instance-stopped --instance-ids "$id" --profile dpca-ide --region ap-northeast-1
            fi
            echo "starting instance (no-op if already running)..."
            aws ec2 start-instances --instance-ids "$id" --profile dpca-ide --region ap-northeast-1 >/dev/null
            echo "waiting for SSM agent to come online (the instance has to boot first)..."
            until [ "$(aws ssm describe-instance-information --filters "Key=InstanceIds,Values=$id" --query 'InstanceInformationList[0].PingStatus' --output text --profile dpca-ide --region ap-northeast-1)" = "Online" ]; do
              echo "  ...still booting, retrying in 3s"
              sleep 3
            done
            echo "SSM online; connecting via ssh..."
            ssh dpca-ide
          '';
        };
        "ec2:status" = {
          description = "List EC2 instances (id / Name / state), highlight my instance";
          run = ''aws ec2 describe-instances --profile dpca-ide --region ap-northeast-1 --query 'Reservations[].Instances[].[InstanceId,Tags[?Key==`Name`].Value|[0],State.Name]' --output table | awk -v id="$(cat "$HOME/.config/dpca/instance-id")" 'id != "" && $0 ~ id {print "\033[1;32m" $0 "\033[0m"; next} /running/ {print "\033[1;33m" $0 "\033[0m"; next} {print}' '';
        };
      };
    };
  };
}
