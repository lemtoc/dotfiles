{ lib, ... }:
{
  programs.ssh = {
    enable = true;
    enableDefaultConfig = false;

    settings = {
      "github.com" = lib.hm.dag.entryBefore [ "*" ] {
        HostName = "ssh.github.com";
        Port = 443;
        User = "git";
      };

      "*" = {
        IdentityAgent = "\"~/Library/Group Containers/2BUA8C4S2C.com.1password/t/agent.sock\"";
      };
    };
  };
}
