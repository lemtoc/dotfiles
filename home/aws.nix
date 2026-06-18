{ ... }:
let
  mkSsoProfileWithRole = roleName: name: accountId: ''
    [profile ${name}]
    sso_session = sso
    sso_account_id = ${accountId}
    sso_role_name = ${roleName}
    region = ap-northeast-1
    output = json
  '';

  mkSsoProfile = mkSsoProfileWithRole "AWSAdministratorAccess";

  ssoSession = ''
    [sso-session sso]
    sso_start_url = https://toda.awsapps.com/start
    sso_region = ap-northeast-1
    sso_registration_scopes = sso:account:access
  '';
in
{
  home.file.".aws/config".text = builtins.concatStringsSep "" [
    (mkSsoProfile "tip-extra" "341238550926")
    (mkSsoProfile "sandbox" "962800862825")
    ssoSession
    (mkSsoProfile "haisou-kanri" "036890309087")
    (mkSsoProfile "koutei" "474668423034")
    (mkSsoProfile "toda" "434274117771")
    (mkSsoProfile "niyarepo" "649213662808")
    (mkSsoProfile "booklift" "537452063997")
    (mkSsoProfileWithRole "DPCa-IDE-User" "dpca-ide" "474212321352")
    ''
      [profile amplify-toda]
      credential_process = aws configure export-credentials --profile toda
      region = ap-northeast-1
    ''
  ];
}
