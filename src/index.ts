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
    if (customTypes.IsKnownEventType(message)) {
      // TODO: SNSに投げる
    }
  }
  return true;
};
