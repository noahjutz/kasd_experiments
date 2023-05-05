import { assert } from "chai";
import { mongo, posts, axios } from "./fixtures.js";

suite("API", () => {
  suiteSetup(async () => {
    await mongo.connect();
  });

  suiteTeardown(async () => {
    await mongo.close();
  });

  setup(async () => {
    await mongo.db("posts").dropDatabase();
  });

  teardown(async () => {});

  test("Entry point returns Hello World", async () => {
    const res = await axios.get("/");
    assert.equal(res.data, "Hello, World!");
  });

  suite("/posts returns inserted post with text", () => {
    ["Hello, #world!", "Deutsch hat ßöäü."].forEach((text) => {
      test(text, async () => {
        await posts.insertOne({ text });

        const res = await axios.get("/posts");
        assert.equal(text, res.data[0]?.text);
      });
    });
  });

  test("/posts returns inserted posts with text", async () => {
    const expected = [
      "Hello, #world!",
      "Deutsch hat ßäöü.",
      "Some symbols are !@#$%^&*()_+",
    ].map((text) => ({ text }));

    await posts.insertMany(expected, { forceServerObjectId: true });

    const res = await axios.get("/posts");
    assert.deepEqual(expected, res.data);
  });
});
