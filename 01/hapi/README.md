# Hapijs

## Install

```
npm i -D @hapi/hapi
```

## Setup

[Hello World](https://hapi.dev/tutorials/?lang=en_US)

```js
import Hapi from "@hapi/hapi";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  await server.start();
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
```
