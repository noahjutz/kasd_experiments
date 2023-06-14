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

## Joi validation & model documentation

todo

## Troubleshooting

### json-schema-ref-parser is deprecated

Following warning: 

```
npm WARN deprecated json-schema-ref-parser@6.1.0: Please switch to @apidevtools/json-schema-ref-parser
```

Ignore for now.

## Further reading

- [hapi-swagger - npm](https://www.npmjs.com/package/hapi-swagger)
- [Structure of an OpenAPI Document](https://learn.openapis.org/specification/structure)
