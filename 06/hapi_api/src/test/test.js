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
        await db.collection("posts").insertOne({ text });

        const res = await axios.get("/posts");
        assert.deepEqual(text, res.data[0].text);
      });
    });
  });
});
