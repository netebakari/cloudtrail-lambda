import unzip from "./unzip";
import * as zippedLog from "./type/zippedCloudTrailLogEvents";
import * as cloudTrailLog from "./type/cloudTrailLog";

export const parse = async (zipped: any): Promise<(string|cloudTrailLog.CloudTrailLogType)[]> => {
  const unzipped = await unzip(zipped);
  zippedLog.AssertsZippedCloudTrailLogEventsType(unzipped);

  return unzipped.logEvents.map((x) => {
    try {
      const parsed = JSON.parse(x.message);
      cloudTrailLog.AssertsCloudTrailLogType(parsed);
      return parsed;
    } catch(e) {
      return x.message;
    }
  });
};
