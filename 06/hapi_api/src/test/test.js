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

  test("/post increases amount of posts by 1", async () => {
    const postsOld = await client.get("/posts");
    const res = await client.post("/post", { message: "Hi, this is a post!" });
    const postsNew = await client.get("/posts");
    assert.equal(postsNew.data.length, postsOld.data.length + 1);
  });
});
