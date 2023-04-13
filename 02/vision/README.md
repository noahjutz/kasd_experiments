# Hapi Vision

## Installing

```
npm i @hapi/hapi
npm i @hapi/vision
```

## Usage

```js
server.views({
  engines: {
    hbs: require("handlebars"),
  },
  relativeTo: __dirname,
  path: "views",
  partialsPath: "views",
  helpersPath: "views/helpers",
  layout: true,
});
```

## Further Reading

- [Views - Hapi](https://hapi.dev/tutorials/views/?lang=en_US)
- [Vision - Hapi](https://hapi.dev/module/vision)
- [Vision Handlebars - Hapi](https://hapi.dev/module/vision/api/?v=7.0.1#handlebars)
