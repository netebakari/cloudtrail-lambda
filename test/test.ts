import * as assert from "assert";
import * as fs from "fs";
import * as customTypes from "../src/type/customTypes";
import { AssertsCloudTrailLogType } from "../src/type/cloudTrailLog";

const loadJson = (filename: string) => {
  const buffer = fs.readFileSync(`test/fixtures/${filename}`);
  return JSON.parse(buffer.toString("utf8"));
};

describe("typeGuards", () => {
  describe("IsLoginType", () => {
    it("iamUser_failure", () => {
      const obj = loadJson("login/iamUser_failure.json");
      AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsLoginType(obj), true);
    });
    it("iamUser_success", () => {
      const obj = loadJson("login/iamUser_success.json");
      AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsLoginType(obj), true);
    });
    it("rootUser_failure", () => {
      const obj = loadJson("login/rootUser_failure.json");
      AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsLoginType(obj), true);
    });
    it("rootUser_success", () => {
      const obj = loadJson("login/rootUser_success.json");
      AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsLoginType(obj), true);
    });
  });

  describe("IsIAMCreatePolicy", () => {
    it("createPolicy_failure", () => {
      const obj = loadJson("iam/createPolicy_failure.json");
      AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsIAMCreatePolicy(obj), true);
    });
    it("createPolicy_success", () => {
      const obj = loadJson("iam/createPolicy_success.json");
      AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsIAMCreatePolicy(obj), true);
    });
  });

  describe("IsModifySecurityGroupType", () => {
    it("authorize1_success", () => {
      const obj = loadJson("securityGroup/authorize1_success.json");
      AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsModifySecurityGroupType(obj), true);
    });
    it("revoke1_success", () => {
      const obj = loadJson("securityGroup/revoke1_success.json");
      AssertsCloudTrailLogType(obj);
      assert.equal(customTypes.IsModifySecurityGroupType(obj), true);
    });
  });
});
