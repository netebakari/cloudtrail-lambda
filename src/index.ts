/* eslint-disable @typescript-eslint/no-unused-vars */
import * as LambdaTypes from "aws-lambda";
import * as env from "./env";
import * as parser from "./parser";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.handler = async (event: any, context: LambdaTypes.Context): Promise<boolean> => {
  const messages = await parser.parse(event);
  for(const message of messages) {
    console.log(JSON.stringify(message));
    console.log("--------");
  }
  return true;
};
