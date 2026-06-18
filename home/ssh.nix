{ lib, ... }:
{
  programs.ssh = {
    enable = true;
    enableDefaultConfig = false;

    # HostName(インスタンスID)は PUBLIC リポジトリに載せたくないので、
    # git 管理外の ~/.ssh/config.d/dpca-ide.conf に切り出して Include する。
    # 当該ファイルには `Host dpca-ide` / `HostName i-...` だけを書く。
    includes = [ "~/.ssh/config.d/dpca-ide.conf" ];

    settings = {
      "github.com" = lib.hm.dag.entryBefore [ "*" ] {
        HostName = "ssh.github.com";
        Port = 443;
        User = "git";
      };

      "dpca-ide" = lib.hm.dag.entryBefore [ "*" ] {
        # HostName(インスタンスID)は Include 先(~/.ssh/config.d/dpca-ide.conf)で定義する
        IdentityFile = "~/.ssh/dpca-ide-keypair-suzuki.pem";
        User = "ec2-user";
        ProxyCommand = "aws ssm start-session --profile dpca-ide --region ap-northeast-1 --target %h --document-name AWS-StartSSHSession --parameters portNumber=%p";
      };

      "*" = {
        IdentityAgent = "\"~/Library/Group Containers/2BUA8C4S2C.com.1password/t/agent.sock\"";
      };
    };
  };
}
