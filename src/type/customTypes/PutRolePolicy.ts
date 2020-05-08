import * as Types from "../";
import { CloudTrailLogType } from "../cloudTrailLog";

/**
 * IAM Policy作成イベント
 */
export interface PutRolePolicyType extends CloudTrailLogType {
  eventSource: "iam.amazonaws.com";
  eventName: "PutRolePolicy";
  requestParameters: RequestParametersType;
  responseElements: null;
  eventType: "AwsApiCall";
}

type RequestParametersType = {
  roleName: string;
  policyName: string;
  policyDocument: string;
};

function AssertsRequestParametersType(arg: any): asserts arg is RequestParametersType {
  Types.mustBeObject(arg);
  Types.mustBeString(arg, "roleName");
  Types.mustBeString(arg, "policyName");
  Types.mustBeString(arg, "policyDocument");
}

export function IsPutRolePolicy(arg: CloudTrailLogType): arg is PutRolePolicyType {
  try {
    AssertsRequestParametersType(arg.requestParameters);
  } catch (e) {
    console.error(e);
    return false;
  }
  return arg.eventType === "AwsApiCall" && arg.eventName === "PutRolePolicy" && arg.eventSource === "iam.amazonaws.com";
}
