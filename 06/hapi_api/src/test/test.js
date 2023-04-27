import { assert } from "chai";
import axios from "axios";
import * as server from "../main/server.js";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

suite("API", () => {
  setup(async () => {
    // ...
  });

  teardown(async () => {
    // ...
  });

  test("Entry point returns Hello World", async () => {
    const res = await client.get("/");
    assert.equal(res.data, "Hello, World!");
  });

  test("/posts returns empty list", async () => {
    const res = await client.get("/posts");
    assert.isEmpty(res.data);
  });

  test("/post returns 200", async () => {
    const res = await client.post("/post", { message: "Hi, this is a post!" });
    assert.equal(200, res.status);
  });
});
