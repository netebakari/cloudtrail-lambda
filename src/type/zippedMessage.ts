import { AssertionError } from "assert";
import { mustBeObject } from "./index";

export type ZippedCloudWatchLogType = {
  awslogs: {
    data: string;
  };
};

export function AssertsZippedCloudWatchLogType(arg: any): asserts arg is ZippedCloudWatchLogType {
  mustBeObject(arg);
  if (typeof arg.awslogs !== "object") {
    throw new AssertionError({ message: "arg.awslogs is not object" });
  }
  if (typeof arg.awslogs.data !== "string") {
    throw new AssertionError({ message: "arg.awslogs.data is not string" });
  }
}
