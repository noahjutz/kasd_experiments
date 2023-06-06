# hapi-swagger

## Setup

```js
await server.register([
  Vision,
  Inert,
  { plugin: HapiSwagger, options: swaggerOptions },
]);
```

## Usage

to show an endpoint in the documentation, add `tags: ["api"]` to the route config.

```js
const route = {
  method: "GET",
  path: "/",
  config: {
    handler: () => "Hello",
    tags: ["api"],
  },
};
```

## Model documentation with Joi

Todo

## Further reading

- [hapi-swagger - npm](https://www.npmjs.com/package/hapi-swagger)
- [Structure of an OpenAPI Document](https://learn.openapis.org/specification/structure)
