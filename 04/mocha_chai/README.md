# Mocha & Chai

## Installation

### [Mocha](https://mochajs.org/#installation)

```
npm i -D mocha
```

### [Chai](https://www.chaijs.com/)

```
npm i -D chai
```

## Usage

### Use chai assert

```js
const { assert } = require("chai");
```

### [TDD interface](https://mochajs.org/#tdd)

```
mocha --ui tdd
```

### [Asynchronous code](https://mochajs.org/#using-async-await)

This is to make sure asynchronous code execution is completed before the test exits. It is not for parallel tests.

### [Parallel tests](https://mochajs.org/#parallel-tests)

```
mocha --parallel
```

## Further reading

- [Chai Assert](https://www.chaijs.com/api/assert/)