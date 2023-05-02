import { assert } from "chai";
import { mongo, axios } from "./fixtures.js";
import * as server from "../main/server.js";

suite("API", () => {
  setup(async () => {
    await mongo.connect();
  });

  teardown(async () => {
    await mongo.close();
  });

  suite("Meta", () => {
    test("resetDb resets db", async () => {});
  });

  test("Entry point returns Hello World", async () => {
    const res = await axios.get("/");
    assert.equal(res.data, "Hello, World!");
  });

  test("/posts returns empty list", async () => {
    const res = await axios.get("/posts");
    assert.isEmpty(res.data);
  });
});
