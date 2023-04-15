# Joi with hapi

## Setup

1.  Install

    ```
    npm i joi
    ```

2.  Import

    ```js
    import Joi from "joi";
    ```

3.  Initialize

    ```js
    await server.validator(Joi);
    ```

## Usage

Add the `validate` property to the route options.

```js
const route = {
  options: {
    validate: {...},
  }
}
```

### Define Schemas

```js
validate: {
  query: {...}, // Query params
  params: {...}, // Path params
  payload: {...}, // Post request payload params
},
```

### Handle input errors

1.  Send the error:

    ```js
    validate: {
      options: { abortEarly: false },
      failAction: (request, h, err) => err,
    }
    ```

2.  Handle the error:

    ```js
    server.ext("onPreResponse", (request, h) => {
      const response = request.response;
      if (!response.isBoom) return h.continue;

      const error = ...

      return h.view("error", { error });
    });
    ```

## Troubleshooting

### SyntaxError: Handlebars partials are not supported

This is an open prettier [issue](https://github.com/prettier/prettier/issues/11834). The glimmer parser [does not generally support handlebars](https://github.com/glimmerjs/glimmer-vm/issues/1367).

### Handlebars helpers in Hapi

I have not figured this out yet.

## Further Reading

- [hapi-joi-errors - Medium](https://medium.com/@csakis/hapi-joi-error-handling-with-custom-messages-1f544e2b1489)
- [hapi-joi-errors - Github](https://github.com/csakis/hapi-joi-errors)
- [Validation - Hapi](https://hapi.dev/tutorials/validation/?lang=en_US)
- [Boom - Hapi](https://hapi.dev/module/boom/)
