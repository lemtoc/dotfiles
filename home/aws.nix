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

  mkReadOnly = name: mkSsoProfileWithRole "AWSReadOnlyAccess" "${name}/readOnly";
  mkPowerUser = name: mkSsoProfileWithRole "AWSPowerUserAccess" "${name}/powerUser";
  mkAdmin = name: mkSsoProfileWithRole "AWSAdministratorAccess" "${name}/admin";

  # 通常アカウントは readOnly → admin の順で 2 つの profile を生成する
  mkAccount = name: accountId: builtins.concatStringsSep "" [
    (mkReadOnly name accountId)
    (mkAdmin name accountId)
  ];

  ssoSession = ''
    [sso-session sso]
    sso_start_url = https://toda.awsapps.com/start
    sso_region = ap-northeast-1
    sso_registration_scopes = sso:account:access
  '';
in
{
  home.file.".aws/config".text = builtins.concatStringsSep "" [
    ssoSession
    (mkAccount "sandbox" "962800862825")
    (mkAccount "tip-extra" "341238550926")
    (mkAccount "booklift" "537452063997")
    (mkAccount "koutei" "474668423034")
    (mkAccount "haisou-kanri" "036890309087")
    # niyarepo のみ powerUser も追加し readOnly → powerUser → admin の順にする
    (mkReadOnly "niyarepo" "649213662808")
    (mkPowerUser "niyarepo" "649213662808")
    (mkAdmin "niyarepo" "649213662808")
    (mkAccount "toda" "434274117771")
    # dpca-ide は専用ロールのみで readOnly は追加しない
    (mkSsoProfileWithRole "DPCa-IDE-User" "dpca-ide" "474212321352")
    ''
      [profile amplify-toda]
      credential_process = aws configure export-credentials --profile toda/readOnly
      region = ap-northeast-1
    ''
  ];
}
