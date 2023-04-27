import { assert } from "chai";
import axios from "axios";
import * as server from "../main/server.js";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

suite("API", () => {
  setup(async () => {
    await server.start();
  });

  teardown(async () => {
    await server.stop();
  });

  test("Entry point returns Hello World", async () => {
    const response = await client.get("/");
    console.log(response.data);
  });
});
