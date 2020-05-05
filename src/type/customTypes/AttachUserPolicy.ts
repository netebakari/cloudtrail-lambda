import { CloudTrailLogType } from "../cloudTrailLog";

export interface AttachUserPolicy extends CloudTrailLogType {
  eventSource: "iam.amazonaws.com";
  eventName: "AttachUserPolicy";
  requestParameters: {
    userName: string;
    policyArn: string;
  };
  responseElements: null;
  eventType: "AwsApiCall";
}

export function IsAttachUserPolicy(arg: CloudTrailLogType): arg is AttachUserPolicy {
  return (
    arg.eventType === "AwsApiCall" && arg.eventName === "AttachUserPolicy" && arg.eventSource === "iam.amazonaws.com"
  );
}
