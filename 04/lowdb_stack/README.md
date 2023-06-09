# Lowdb with the KASD Stack

## Stack

|                  |                             |
| ---------------- | --------------------------- |
| Framework        | Hapi                        |
| Frontend         | Vision + Handlebars + Bulma |
| Backend          | Lowdb                       |
| Style            | ESLint + Prettier           |
| Input Validation | Joi                         |
| Test             | Mocha TDD + Chai Assert     |

## Installation

```sh
npm i @hapi/hapi @hapi/vision handlebars lowdb
npm pkg set type=module # ES Module
```

## Setup

### ESLint + Prettier

See [01/eslint_prettier](../../01/eslint_prettier/README.md)

```sh
npm init @eslint/config
npm i -D prettier eslint-config-prettier
echo {} > .prettierrc
```

### Hapi

See [01/hapi](../../01/hapi/README.md)

```js
const init = async () => {
  await Hapi.server({ port: 3000 }).start();
};
```

### Vision + Handlebars

See [02/vision](../../02/vision/README.md)

```js
import Vision from "@hapi/vision";
server.register(Vision);
server.views({
  // ...
});
```

### Lowdb

See [04/lowdb#Setup](../../04/lowdb/README.md#setup)

```js
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
const db = new Low(new JSONFile("db.json"));
```

### Joi (todo)

See [03/joi_hapi](../../03/joi_hapi/README.md)

(Not yet implemented)

### Mocha + Chai (todo)

See [04/mocha_chai](../../04/mocha_chai/README.md)

(Not yet implemented)
