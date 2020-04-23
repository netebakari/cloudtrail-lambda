import * as zlib from "zlib";
import * as zippedMessage from "./type/zippedMessage";

/**
 * Lambdaの引数（gzip圧縮されたものがBASE64エンコードされている）をunzipしてJSONとしてパースして返す
 * @param zipped
 */
const unzip = async (zipped: any): Promise<object> => {
  zippedMessage.AssertsZippedCloudWatchLogType(zipped);
  const buffer = Buffer.from(zipped.awslogs.data, "base64");
  return new Promise<any[]>((resolve, reject) => {
    zlib.unzip(buffer, (err, data) => {
      if (err) {
        reject(err);
      }
      try {
        const result = JSON.parse(data.toString("utf-8"));
        if (typeof result !== "object") {
          reject("non-bject provided");
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
};

export default unzip;
