# Joi

## Installing

```
npm i joi
```

## Usage

```js
const Joi = require("joi");
```

### Schemas

```js
const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(10),
  // ...
});
```

or

```js
const schema = Joi.string();
```

### Validation

```js
schema.validate("user123"); // fails
schema.validate("helloworld"); // success
```

or

```js
await schema.validateAsync(value);
```

## Further reading

- [Validation - Hapi](https://hapi.dev/tutorials/validation)
- [Joi API](https://joi.dev/api)
