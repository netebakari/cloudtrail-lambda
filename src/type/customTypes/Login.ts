import * as cloudTrailLog from "../cloudTrailLog";

export interface LoginType {
  eventVersion: string;
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
  eventTime: string;
  eventSource: "signin.amazonaws.com";
  eventName: "ConsoleLogin";
  awsRegion: string;
  sourceIPAddress: string;
  userAgent: string;
  errorMessage?: string;
  requestParameters: null;
  responseElements: {
    ConsoleLogin: "Success" | "Failure";
  };
  additionalEventData: {
    LoginTo: string;
    MobileVersion: "No" | "Yes";
    MFAUsed: "No" | "Yes";
  };
  eventID: string;
  eventType: "AwsConsoleSignIn";
  recipientAccountId: string;
}

export function IsLoginType(arg: cloudTrailLog.CloudTrailLogType): arg is LoginType {
  return (
    arg.eventType === "AwsConsoleSignIn" &&
    arg.eventName === "ConsoleLogin" &&
    arg.eventSource === "signin.amazonaws.com"
  );
}
