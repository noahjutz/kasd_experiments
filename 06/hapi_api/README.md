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

### Mocha + Chai

See [04/mocha_chai](../../04/mocha_chai).

Install:

```sh
npm i -D mocha chai @types/chai
```

import Chai:

```js
import { assert } from "chai";
```

Run tests:

```sh
mocha --ui tdd src/test
```

### Mongoose

See [05/mongoose](../../05/mongoose).
