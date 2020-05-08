import * as Types from "../";
import { CloudTrailLogType } from "../cloudTrailLog";
import { AssertionError } from "assert";

export interface ModifySecurityGroupType extends CloudTrailLogType {
  eventSource: "iam.amazonaws.com";
  eventName: "AuthorizeSecurityGroupIngress" | "RevokeSecurityGroupIngress";
  requestParameters: RequestParametersType;
  responseElements: ResponseElements;
  eventType: "AwsApiCall";
}

type RequestParametersType = {
  groupId: string;
  ipPermissions: {
    items: IpPermissionItemType[];
  };
};

type IpPermissionItemType = {
  ipProtocol: string;
  fromPort: number;
  toPort: number;
  groups: Groups;
  ipRanges: IPRanges;
  ipv6Ranges: Groups;
  prefixListIds: Groups;
};

export interface Groups {}

export interface IPRanges {
  items: IPRangesItem[];
}

export interface IPRangesItem {
  cidrIp: string;
}

interface ResponseElements {
  requestId: string;
  _return: boolean;
}

export function IsModifySecurityGroupType(arg: CloudTrailLogType): arg is ModifySecurityGroupType {
  try {
    AssertsRequestParametersType(arg.requestParameters);
  } catch (e) {
    console.error(e);
    return false;
  }
  return (
    arg.eventType === "AwsApiCall" &&
    ["AuthorizeSecurityGroupIngress", "RevokeSecurityGroupIngress"].includes(arg.eventName) &&
    arg.eventSource === "ec2.amazonaws.com"
  );
}

function AssertsRequestParametersType(arg: any): asserts arg is RequestParametersType {
  Types.mustBeObject(arg);
  Types.mustBeString(arg, "groupId");
  const ipPermissionItems = arg.ipPermissions?.items;
  if (!Array.isArray(ipPermissionItems)) {
    throw new AssertionError({
      message: "arg.requestParameters.ipPermissions.items is not an array",
      actual: ipPermissionItems,
    });
  }
  for (const item of ipPermissionItems) {
    AssertsIpPermissionItemType(item);
  }
}

function AssertsIpPermissionItemType(arg: any): asserts arg is IpPermissionItemType {
  Types.mustBeObject(arg);
  Types.mustBeString(arg, "ipProtocol");
  Types.mustBeNumber(arg, "fromPort");
  Types.mustBeNumber(arg, "toPort");
  // groups
}
