{ ... }:
let
  customCert = "/Users/t1190078/.local/share/ca-certificates/corp.pem";
in
{
  # M4Pro-specific configuration (corporate SSL certificate)
  home-manager.users.t1190078 = {
    home.sessionVariables = {
      DENO_CERT = customCert;
      NODE_EXTRA_CA_CERTS = customCert;
      GIT_SSL_CAINFO = customCert;
      AWS_CA_BUNDLE = customCert;
    };
  };
}
