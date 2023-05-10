import { assert } from "chai";
import chai from "chai";
import chp from "chai-as-promised";
import { mongo, posts, axios } from "./fixtures.js";
import Boom from "@hapi/boom";
import { AxiosError } from "axios";

chai.use(chp);

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

  suite("GET /", () => {
    test("Entry point returns Hello World", async () => {
      const res = await axios.get("/");
      assert.equal(res.data, "Hello, World!");
    });
  });

  suite("GET /posts", () => {
    ["Hello, #world!", "Deutsch hat ßöäü."].forEach((text) => {
      test("Inserted post is returned: " + text, async () => {
        const doc = { text };
        await posts.insertOne(doc);
        doc._id = doc._id.toString();

        const res = await axios.get("/posts");

        assert.deepEqual(doc, res.data[0]);
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

  suite("GET /post/{id}", () => {
    test("returns inserted post", async () => {
      const expected = { text: "Hello, #world!" };
      await posts.insertOne(expected);
      expected._id = expected._id.toString();

      const res = await axios.get("/post/" + expected._id);
      assert.deepEqual(expected, res.data);
    });
  });

  suite("PUT /post/{id}", () => {
    test("Throws error if post doesn't exist", async () => {
      const request = axios.put("/post/1");
      await assert.isRejected(request, AxiosError);
    });
    test("Throws error 400 if post doesn't exist", async () => {
      try {
        await axios.put("/post/1");
      } catch (err) {
        assert.equal(400, err.response.data.statusCode);
      }
    });
    // test("returns updated post", async () => {
    //   throw "not yet implemented";
    // });
    // test("updates post at id", async () => {
    //   throw "not yet implemented";
    // });
  });
});
