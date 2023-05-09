# API Server with Hapi and MongoDB

This example API server allows clients to interact with public posts on a mock social media platform.

## Roadmap

- [x] `GET /posts`
  - [ ] return id as well!
- [ ] `GET /post/{text}`
- [ ] `PUT /post/{id}`
- [ ] `PATCH /post/{id}`
- [ ] `DELETE /post/{id}`

## Tech stack

|           |                         |
| --------- | ----------------------- |
| Framework | Hapi + Boom             |
| Database  | MongoDB + Mongoose      |
| Test      | Mocha TDD + Chai Assert |
| Style     | ESLint + Prettier       |

## Implementation

### Mocha + Chai

See [04/mocha_chai](../../04/mocha_chai).

1. Install

   ```sh
   npm i -D mocha chai @types/chai
   ```

1. Import Chai and Axios

   ```js
   import { assert } from "chai";
   ```

1. Run tests

   ```sh
   mocha --ui tdd src/test
   ```

### Axios

1. Install

   ```sh
   npm i -D axios
   ```

1. Setup

   ```js
   import axios from "axios";
   const client = axios.create({ baseURL: "http://localhost:3000" });
   ```

### Mongoose

See [05/mongoose](../../05/mongoose).

1. Install

   ```sh
   npm i mongoose
   ```

2. Import

   ```js
   import { mongoose } from "mongoose";
   ```

3. Connect

   ```js
   mongoose.connect("mongodb://localhost:27017/posts");
   ```

### MongoDB Nodejs Driver

See [05/mongodb](../../05/mongodb/).

To cross-check results in tests, I use the MongoDB Nodejs Driver directly.

1. Install

   ```sh
   npm i -D mongodb
   ```

2. Setup

   ```js
   import { MongoClient } from "mongodb";
   const client = new MongoClient("mongodb://127.0.0.1:27017");
   ```

3. Connect and disconnect
   ```js
   await client.connect();
   await client.close();
   ```

## TDD approach

You want to implement a feature.

1. What are the requirements?
1. for each requirement:
   1. which tests are required to prove that this requirement is fulfilled?
   1. for each test:
      1. Red, green, refactor.

## Troubleshooting

### I don't know where this "\_id": {} is coming from.

In the output, the expected text is in red and the actual text is in green, i don't know why it's mixed up.

When you use the mongodb node driver to insert objects, the new ids will be attached to the objects you pass. To prevent this from happening, pass `forceServerObjectId: true`.

### ObjectId("abc") != "abc"

To get the string representation of an `ObjectId`, call [`_id.toHexString()`](https://mongodb.github.io/node-mongodb-native/5.3/classes/BSON.ObjectId.html#toHexString) or [`_id.toString()`](https://mongodb.github.io/node-mongodb-native/5.3/classes/BSON.ObjectId.html#toString).
