import { AssertionError } from "assert";

export interface CloudTrailLogType {
  eventVersion: string;
  userIdentity: UserIdentity;
  eventTime: string;
  eventSource: string;
  eventName: string;
  awsRegion: string;
  sourceIPAddress: string;
  userAgent: string;
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

export interface UserIdentity {
  type: string;
  invokedBy?: string;
  principalId?: string;
  arn?: string;
  accountId?: string;
  accessKeyId?: string;
  userName?: string;
  sessionContext?: SessionContext;
}

export interface SessionContext {
  sessionIssuer: SessionIssuer;
  webIdFederationData: SessionIssuer;
  attributes: SessionContextAttributes;
}

export interface SessionContextAttributes {
  mfaAuthenticated: string;
  creationDate: string;
}

export interface SessionIssuer {}

export function AssertsCloudTrailLogType(arg: any): asserts arg is CloudTrailLogType {
  if (arg === undefined || arg == null) {
    throw new AssertionError({ message: "arg is undefined or null" });
  }
  if (typeof arg !== "object") {
    throw new AssertionError({ message: "arg is not object" });
  }
  if (typeof arg.eventVersion !== "string") {
    throw new AssertionError({ message: "arg.eventVersion is not string", actual: arg.eventVersion });
  }
  if (typeof arg.eventTime !== "string") {
    throw new AssertionError({ message: "arg.eventTime is not string", actual: arg.eventTime });
  }
  if (typeof arg.eventSource !== "string") {
    throw new AssertionError({ message: "arg.eventSource is not string", actual: arg.eventSource });
  }
  if (typeof arg.eventName !== "string") {
    throw new AssertionError({ message: "arg.eventName is not string", actual: arg.eventName });
  }
  if (typeof arg.awsRegion !== "string") {
    throw new AssertionError({ message: "arg.awsRegion is not string", actual: arg.awsRegion });
  }
  if (typeof arg.sourceIPAddress !== "string") {
    throw new AssertionError({ message: "arg.sourceIPAddress is not string", actual: arg.sourceIPAddress });
  }
  if (typeof arg.userAgent !== "string") {
    throw new AssertionError({ message: "arg.userAgent is not string", actual: arg.userAgent });
  }
  if (arg.errorMessage !== undefined && typeof arg.errorMessage !== "string") {
    throw new AssertionError({ message: "arg.errorMessage is neither undefined nor string", actual: arg.errorMessage });
  }
  if (arg.requestID !== undefined && typeof arg.requestID !== "string") {
    throw new AssertionError({ message: "arg.requestID is neither undefined nor string", actual: arg.requestID });
  }
  if (typeof arg.eventID !== "string") {
    throw new AssertionError({ message: "arg.eventID is not string", actual: arg.eventID });
  }
  if (typeof arg.eventType !== "string") {
    throw new AssertionError({ message: "arg.eventType is not string", actual: arg.eventType });
  }
  if (arg.apiVersion !== undefined && typeof arg.apiVersion !== "string") {
    throw new AssertionError({ message: "arg.apiVersion is neither undefined nor string", actual: arg.apiVersion });
  }
  if (typeof arg.recipientAccountId !== "string") {
    throw new AssertionError({ message: "arg.recipientAccountId is not string", actual: arg.recipientAccountId });
  }
}
