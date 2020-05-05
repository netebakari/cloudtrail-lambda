import { CloudTrailLogType } from "../cloudTrailLog";

export interface LoginType extends CloudTrailLogType {
  userIdentity: {
    type: "IAMUser" | "Root";
    principalId: string;
    /**
     * ログイン失敗の場合は値なし
     */
    arn?: string;
    accountId: string;
    /**
     * root userの場合は値なし
     */
    userName?: string;
    /**
     * IAM Userの場合は値なし、root userの場合は空文字
     */
    accessKeyId?: "";
  };
  eventSource: "signin.amazonaws.com";
  eventName: "ConsoleLogin";
  requestParameters: null;
  responseElements: {
    ConsoleLogin: "Success" | "Failure";
  };
  additionalEventData: {
    LoginTo: string;
    MobileVersion: "No" | "Yes";
    MFAUsed: "No" | "Yes";
  };
  eventType: "AwsConsoleSignIn";
}

export function IsLoginType(arg: CloudTrailLogType): arg is LoginType {
  return (
    arg.eventType === "AwsConsoleSignIn" &&
    arg.eventName === "ConsoleLogin" &&
    arg.eventSource === "signin.amazonaws.com"
  );
}
