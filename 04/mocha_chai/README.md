# Mocha & Chai

## Installation

```
npm i -D mocha chai
```

## Usage

```js
const { assert } = require("chai");
```

## Troubleshooting

### How do I use the [TDD interface](https://mochajs.org/#tdd)?

```
mocha --ui tdd
```

### How do I run [Parallel tests](https://mochajs.org/#parallel-tests)?

```
mocha --parallel
```

### How do I test functions that return [promises](https://www.chaijs.com/plugins/chai-as-promised/)?

Install [`chai-as-promised`](https://www.npmjs.com/package/chai-as-promised).

```sh
npm i -D chai-as-promised
```

```js
import chp from "chai-as-promised";
chai.use(chp);

// in the test:
chai.isRejected(promise);
```

## Further reading

- [Chai Assert](https://www.chaijs.com/api/assert/)
