import * as assert from "assert";
import * as myModule from "../src/index";
import * as mocha from "mocha";
import * as fs from "fs";
import * as customTypes from "../src/type/customTypes";
import * as cloudTrailLogTypes from "../src/type/cloudTrailLog";

const loadJson = (filename: string) => {
  const buffer = fs.readFileSync(`test/fixtures/${filename}`);
  return JSON.parse(buffer.toString("utf8"));
};

describe("typeGuards", () => {
  describe("IsLoginType", () => {
    it("iamUser_failure", () => {
      const obj = loadJson("login/iamUser_failure.json");
      cloudTrailLogTypes.AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsLoginType(obj), true);
    });
    it("iamUser_success", () => {
      const obj = loadJson("login/iamUser_success.json");
      cloudTrailLogTypes.AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsLoginType(obj), true);
    });
    it("rootUser_failure", () => {
      const obj = loadJson("login/rootUser_failure.json");
      cloudTrailLogTypes.AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsLoginType(obj), true);
    });
    it("rootUser_success", () => {
      const obj = loadJson("login/rootUser_success.json");
      cloudTrailLogTypes.AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsLoginType(obj), true);
    });
  });
});
