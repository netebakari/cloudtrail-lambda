import { CloudTrailLogType } from "../cloudTrailLog";

export interface IAMCreatePolicyType extends CloudTrailLogType {
  eventSource: "iam.amazonaws.com";
  eventName: "CreatePolicy";
  requestParameters: {
    policyName: string;
    policyDocument: string;
    description: string;
  };
  responseElements: null | ResponseElements;
  eventType: "AwsApiCall";
}

interface ResponseElements {
  policy: {
    policyName: string;
    policyId: string;
    arn: string;
    path: string;
    defaultVersionId: string;
    attachmentCount: number;
    permissionsBoundaryUsageCount: number;
    isAttachable: boolean;
    createDate: string;
    updateDate: string;
  };
}

export function IsIAMCreatePolicy(arg: CloudTrailLogType): arg is IAMCreatePolicyType {
  return arg.eventType === "AwsApiCall" && arg.eventName === "CreatePolicy" && arg.eventSource === "iam.amazonaws.com";
}
