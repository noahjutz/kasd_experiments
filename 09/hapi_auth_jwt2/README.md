# JWT

To see what a JWT looks like, see https://jwt.io/.

## hapi-auth-jwt2

Setup:

```js
import hapiAuthJwt2 from "hapi-auth-jwt2";

await server.register(hapiAuthJwt2);
server.auth.strategy("jwt", "jwt", {
    key: "correct-horse-battery-staple",
    validate: async () => ({ isValid }),
})
server.auth.default("jwt");
```

## Further reading

- [hapi-auth-jwt2-cookie-example](https://github.com/dwyl/hapi-auth-jwt2-cookie-example)