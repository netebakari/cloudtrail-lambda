import { CloudTrailLogType } from "../cloudTrailLog";

export interface PutRolePolicyType extends CloudTrailLogType {
  eventSource: "iam.amazonaws.com";
  eventName: "PutRolePolicy";
  requestParameters: {
    roleName: string;
    policyName: string;
    policyDocument: string;
  };
  responseElements: null;
  eventType: "AwsApiCall";
}

export function IsPutRolePolicy(arg: CloudTrailLogType): arg is PutRolePolicyType {
  return arg.eventType === "AwsApiCall" && arg.eventName === "PutRolePolicy" && arg.eventSource === "iam.amazonaws.com";
}
