import unzip from "./unzip";
import * as cloudTrailEventType from "./type/cloudTrailEvent";

export const parse = async (zipped: any): Promise<object[]> => {
  const unzipped = await unzip(zipped);
  cloudTrailEventType.AssertsCloudTrailLogEventType(unzipped);

  return unzipped.logEvents.map((x) => {
    return JSON.parse(x.message);
  });
};
