import { UserIdentity, AssetsUserIdentity } from "./userIdentity";
import { mustBeString, mustBeObject } from "./index";

export interface CloudTrailLogType {
  eventVersion: string;
  userIdentity: UserIdentity;
  eventTime: string;
  eventSource: string;
  eventName: string;
  awsRegion: string;
  sourceIPAddress: string;
  userAgent: string;
  errorCode?: string;
  errorMessage?: string;
  requestParameters: object | null;
  responseElements: object | null;
  requestID?: string;
  eventID: string;
  resources?: Resources[];
  eventType: string;
  apiVersion?: string;
  recipientAccountId: string;
}

export interface Resources {
  ARN: string;
  accountId: string;
  type: string;
}

export function AssertsCloudTrailLogType(arg: any): asserts arg is CloudTrailLogType {
  mustBeObject(arg);
  mustBeString(arg, "eventVersion");
  AssetsUserIdentity(arg.userIdentity);
  mustBeString(arg, "eventTime");
  mustBeString(arg, "eventSource");
  mustBeString(arg, "eventName");
  mustBeString(arg, "awsRegion");
  mustBeString(arg, "sourceIPAddress");
  mustBeString(arg, "userAgent");
  mustBeString(arg, "errorMessage", true);
  // requestParameters
  // responseElements
  mustBeString(arg, "requestID", true);
  mustBeString(arg, "eventID");
  // resources
  mustBeString(arg, "eventType");
  mustBeString(arg, "apiVersion", true);
  mustBeString(arg, "recipientAccountId");
}
