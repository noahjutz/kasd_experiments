## Hapi inert

## Installing

```
npm i @hapi/inert
```

## Usage

```js
await server.register(require("@hapi/inert"));
```

```js
const handler = (request, h) => h.file("index.html");
```

## Further reading

- [Serving static files - Hapi](https://hapi.dev/tutorials/servingfiles)
- [inert - Hapi](https://hapi.dev/module/inert/)
