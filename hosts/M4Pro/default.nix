{ username, ... }:
let
  customCert = "/Users/${username}/.local/share/ca-certificates/corp.pem";
in
{
  # M4Pro-specific configuration (corporate SSL certificate)
  home-manager.users.${username} = {
    home.sessionVariables = {
      DENO_CERT = customCert;
      NODE_EXTRA_CA_CERTS = customCert;
      GIT_SSL_CAINFO = customCert;
      AWS_CA_BUNDLE = customCert;
    };
  };
}
