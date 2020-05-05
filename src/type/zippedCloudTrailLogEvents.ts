import { mustBeObject, mustBeString } from "./index";
import { AssertionError } from "assert";

export interface ZippedCloudTrailLogEventsType {
  messageType: string;
  owner: string;
  logGroup: string;
  logStream: string;
  subscriptionFilters: string[];
  logEvents: {
    id: string;
    timestamp: number;
    message: string;
  }[];
}

export function AssertsZippedCloudTrailLogEventsType(arg: any): asserts arg is ZippedCloudTrailLogEventsType {
  mustBeObject(arg);
  if (arg.messageType !== "DATA_MESSAGE") {
    throw new AssertionError({ message: "arg.messageType is not 'DATA_MESSAGE'", actual: arg.messageType });
  }
  mustBeString(arg, "owner");
  mustBeString(arg, "logGroup");
  mustBeString(arg, "logStream");
  if (!Array.isArray(arg.subscriptionFilters)) {
    throw new AssertionError({ message: "arg.subscriptionFilters is not Array", actual: arg.subscriptionFilters });
  }
  if (!Array.isArray(arg.logEvents)) {
    throw new AssertionError({ message: "arg.logEvents is not Array", actual: arg.logEvents });
  }
  for (const item of arg.logEvents) {
    if (typeof item.id !== "string") {
      throw new AssertionError({ message: "arg.logEvents.id is not string", actual: item.id });
    }
    if (typeof item.timestamp !== "number") {
      throw new AssertionError({ message: "arg.logEvents.timestamp is not number", actual: item.timestamp });
    }
    if (typeof item.message !== "string") {
      throw new AssertionError({ message: "arg.logEvents.message is not string", actual: item.message });
    }
    try {
      JSON.parse(item.message);
    } catch (e) {
      throw new AssertionError({ message: "arg.logEvents.message is not valid JSON", actual: item.message });
    }
  }
}
