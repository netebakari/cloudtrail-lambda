/* eslint-disable @typescript-eslint/no-unused-vars */
import * as LambdaTypes from "aws-lambda";
import * as env from "./env";
import * as parser from "./parser";
import * as customTypes from "./type/customTypes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.handler = async (event: any, context: LambdaTypes.Context): Promise<boolean> => {
  console.log(event);
  const messages = await parser.parse(event);
  for (const message of messages) {
    console.log(JSON.stringify(message));

    if (typeof message !== "string") {
      if (customTypes.IsLoginType(message)) {
        console.log("--LOGIN--");
        console.log(`UserType=${message.userIdentity.type}`);
        console.log(`UserName=${message.userIdentity.userName}`);
        console.log(`Result=${message.responseElements.ConsoleLogin}`);
      } else {
        console.log(`EventType: ${message.eventType}`);
        console.log(`EventName: ${message.eventName}`);
      }
    }
    console.log("--------");
  }
  return true;
};
