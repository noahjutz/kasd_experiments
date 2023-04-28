# API Server with Hapi and MongoDB

This example API server allows clients to interact with public posts on a mock social media platform.

## Tech stack

|           |                         |
| --------- | ----------------------- |
| Framework | Hapi + Boom             |
| Database  | MongoDB + Mongoose      |
| Test      | Mocha TDD + Chai Assert |
| Style     | ESLint + Prettier       |

## Implementation

### Mocha + Chai + Axios

See [04/mocha_chai](../../04/mocha_chai).

1. Install:

   ```sh
   npm i -D mocha chai axios @types/chai
   ```

1. Import Chai and Axios:

   ```js
   import { assert } from "chai";
   import axios from "axios";
   ```

1. Set up axios:

   ```js
   const client = axios.create({
     baseURL: "http://localhost:3000",
   });
   ```

1. Run tests:
   ```sh
   mocha --ui tdd src/test
   ```

### Mongoose

See [05/mongoose](../../05/mongoose).

1. Install:

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
