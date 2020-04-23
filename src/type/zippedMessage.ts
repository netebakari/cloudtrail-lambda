import { AssertionError } from "assert";

export type ZippedCloudWatchLogType = {
  awslogs: {
    data: string;
  };
};

export function AssertsZippedCloudWatchLogType(arg: any): asserts arg is ZippedCloudWatchLogType {
  if (arg === undefined || arg == null) {
    throw new AssertionError({ message: "arg is undefined or null" });
  }
  if (typeof arg !== "object") {
    throw new AssertionError({ message: "arg is not object" });
  }
  if (typeof arg.awslogs !== "object") {
    throw new AssertionError({ message: "arg.awslogs is not object" });
  }
  if (typeof arg.awslogs.data !== "string") {
    throw new AssertionError({ message: "arg.awslogs.data is not string" });
  }
}
