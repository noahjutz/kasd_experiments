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

  suite("/posts returns inserted post", () => {
    ["Hello, #world!", "Deutsch hat ßöäü."].forEach((text) => {
      test(text, async () => {
        const doc = { text };
        await posts.insertOne(doc);
        doc._id = doc._id.toString();

        const res = await axios.get("/posts");

        assert.deepEqual(doc, res.data[0]);
      });
    });
  });

  test("/posts returns inserted posts", async () => {
    const expected = [
      "Hello, #world!",
      "Deutsch hat ßäöü.",
      "Some symbols are !@#$%^&*()_+",
    ].map((text) => ({ text }));

    await posts.insertMany(expected);
    expected.forEach((e) => (e._id = e._id.toString()));

    const res = await axios.get("/posts");
    assert.deepEqual(expected, res.data);
  });
});
