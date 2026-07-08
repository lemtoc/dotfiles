{ username, lib, ... }:
let
  customCert = "/Users/${username}/.local/share/ca-certificates/corp.pem";
in
{
  # M4Pro-specific configuration (corporate SSL certificate)
  home-manager.users.${username} = {
    home.sessionPath = lib.mkBefore [
      "/Users/${username}/dev/oss/aws-cli/.venv-local/bin"
    ];

    home.sessionVariables = {
      DENO_CERT = customCert;
      NODE_EXTRA_CA_CERTS = customCert;
      GIT_SSL_CAINFO = customCert;
      CARGO_HTTP_CAINFO = customCert;
      AWS_CA_BUNDLE = customCert;
    };
  };
}
