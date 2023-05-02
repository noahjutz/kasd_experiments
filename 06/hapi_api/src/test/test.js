import { assert } from "chai";
import { mongo, axios } from "./fixtures.js";
import * as server from "../main/server.js";

suite("API", () => {
  suiteSetup(async () => {
    await mongo.connect();
  });

  suiteTeardown(async () => {
    await mongo.close();
  });

  setup(async () => {
    await mongo.db("test").dropDatabase();
  });

  teardown(async () => {});

  test("Entry point returns Hello World", async () => {
    const res = await axios.get("/");
    assert.equal(res.data, "Hello, World!");
  });

  test("/posts returns empty list", async () => {
    const res = await axios.get("/posts");
    assert.isEmpty(res.data);
  });
});
