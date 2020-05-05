import { AssertsCloudTrailLogType } from "../cloudTrailLog";
import * as Login from "./Login";
import * as CreatePolicy from "./CreatePolicy";
import * as PutRolePolicy from "./PutRolePolicy";

export const IsLoginType = Login.IsLoginType;
export type LoginType = Login.LoginType;

export const IsIAMCreatePolicy = CreatePolicy.IsIAMCreatePolicy;
export type IAMCreatePolicyType = CreatePolicy.IAMCreatePolicyType;

export const IsPutRolePolicy = PutRolePolicy.IsPutRolePolicy;
export type PutRolePolicyType = PutRolePolicy.PutRolePolicyType;

export type KnownEventType = LoginType | IAMCreatePolicyType | PutRolePolicyType;

export const IsKnownEventType = (arg: any): arg is KnownEventType => {
  try {
    AssertsCloudTrailLogType(arg);
  } catch (e) {
    console.error(e);
    return false;
  }

  if (IsLoginType(arg)) {
    return true;
  }
  if (IsIAMCreatePolicy(arg)) {
    return true;
  }
  if (IsPutRolePolicy(arg)) {
    return true;
  }

  return false;
};
