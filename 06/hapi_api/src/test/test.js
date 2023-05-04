import { assert } from "chai";
import { mongo, db, axios } from "./fixtures.js";

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

  test("/posts returns posts", async () => {
    await db.collection("posts").insertOne({ text: "this is a post" });
    const expected = await db.collection("posts").find().toArray();
    const res = await axios.get("/posts");
    assert.deepEqual(expected, res.data);
  });
});
