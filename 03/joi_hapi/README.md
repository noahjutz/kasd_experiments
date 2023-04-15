# Joi with hapi

## Install

```
npm i joi
```

```js
import Joi from "joi";
```

## Usage

Add the `validate` property to the route options.

```js
validate: {
  options: { abortEarly: false },
  failAction: (request, h, err) => {},
  query: Joi.object({...}), // Query params
  params: Joi.object({...}), // Path params
  payload: Joi.object({...}), // Post request payload
},
```

### failAction

```js
const failAction = (request, h, err) => {
  // todo
};
```

## Error handling (todo)

In init:

```js
server.ext("onPreResponse", (request, h) => {
  const response = request.response;
  if (!response.isBoom) return h.continue;

  if (request.route.path === "/submit") {
    // TODO group details by path
    // const errors = response.details.group(({ path }) => path);
    return h.view("form", { errors: response.details });
  }
});
```

## Troubleshooting

### SyntaxError: Handlebars partials are not supported

This is an open prettier [issue](https://github.com/prettier/prettier/issues/11834). The glimmer parser [does not generally support handlebars](https://github.com/glimmerjs/glimmer-vm/issues/1367).

## Further Reading

- [hapi-joi-errors - Medium](https://medium.com/@csakis/hapi-joi-error-handling-with-custom-messages-1f544e2b1489)
- [hapi-joi-errors - Github](https://github.com/csakis/hapi-joi-errors)
- [Validation - Hapi](https://hapi.dev/tutorials/validation/?lang=en_US)
- [Boom - Hapi](https://hapi.dev/module/boom/)
