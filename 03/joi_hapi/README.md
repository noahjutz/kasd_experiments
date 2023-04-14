# Joi with hapi

## Install

```
npm i joi
```

```js
import Joi from "joi";
```

## Usage

```js
const route = {
  // method, path, handler, ...
  options: {
    validate: {
      options: {
        abortEarly: false, // catch all errors
      },
      query: Joi.object({
        name: Joi.string().alphanum().min(3).max(10),
        // ... rules ...
      }),
      failAction: (request, h, err) => {
        // ... callback ...
        throw err;
      },
    },
  },
};
```

### Query params

Example: `localhost:3000?name=ferris&location=chicago`

```js
query: Joi.object({
  // ...
}),
```

### Path params

Example: `localhost:3000/{user}`

```js
params: Joi.object({
  // ...
}),
```

### Request payload

Example: `localhost:3000/post` (post request)

```js
payload: Joi.object({
  // ...
}),
```

## Error handling

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

## Further Reading

- [hapi-joi-errors - Medium](https://medium.com/@csakis/hapi-joi-error-handling-with-custom-messages-1f544e2b1489)
- [hapi-joi-errors - Github](https://github.com/csakis/hapi-joi-errors)
- [Validation - Hapi](https://hapi.dev/tutorials/validation/?lang=en_US)
- [Boom - Hapi](https://hapi.dev/module/boom/)
````
