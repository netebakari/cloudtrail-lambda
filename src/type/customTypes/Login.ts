import * as cloudTrailLog from "../cloudTrailLog";

export interface LoginType {
  eventVersion: string;
  userIdentity: {
    type: "IAMUser" | "Root";
    principalId: string;
    arn: string;
    accountId: string;
    userName?: string;
    /**
     * IAM Userの場合は値なし
     */
    accessKeyId?: string;
  };
  eventTime: string;
  eventSource: "signin.amazonaws.com";
  eventName: "ConsoleLogin";
  awsRegion: string;
  sourceIPAddress: string;
  userAgent: string;
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
