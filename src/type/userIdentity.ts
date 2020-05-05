import { AssertionError } from "assert";
import { mustBeString, mustBeObject } from "./index";

export interface UserIdentity {
  type: "AssumedRole" | "IAMUser" | "Root";
  invokedBy?: string;
  principalId: string;
  arn?: string;
  accountId: string;
  accessKeyId?: string;
  userName?: string;
  sessionContext?: SessionContext;
}

interface SessionContext {
  sessionIssuer: SessionIssuer;
  webIdFederationData: WebIDFederationData;
  attributes: SessionContextAttributes;
}

interface SessionContextAttributes {
  mfaAuthenticated: string;
  creationDate: string;
}

interface SessionIssuer {
  type?: string;
  principalId?: string;
  arn?: string;
  accountId?: string;
  userName?: string;
}

interface WebIDFederationData {}

export function AssetsUserIdentity(arg: any): asserts arg is UserIdentity {
  mustBeObject(arg);
  if (!["AssumedRole", "IAMUser", "Root"].includes(arg.type)) {
    throw new AssertionError({
      message: "arg.type must be either 'AssumedRole', 'IAMUser' or 'Root'",
      actual: arg.type,
    });
  }
  mustBeString(arg, "invokedBy", true);
  mustBeString(arg, "principalId");
  mustBeString(arg, "arn", true);
  mustBeString(arg, "accountId");
  mustBeString(arg, "accessKeyId", true);
  mustBeString(arg, "userName", true);
}

export function IsUserIdentity(arg: any): arg is UserIdentity {
  try {
    AssetsUserIdentity(arg);
    return true;
  } catch (e) {
    return false;
  }
}
