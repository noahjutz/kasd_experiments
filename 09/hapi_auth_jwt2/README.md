# hapi-auth-jwt2

To see what a JWT looks like, see https://jwt.io/.

## Require authentication

Setup:

```js
import hapiAuthJwt2 from "hapi-auth-jwt2";

await server.register(hapiAuthJwt2);
server.auth.strategy("jwt", "jwt", {
  key: "correct-horse-battery-staple",
  validate: async () => ({ isValid }),
});
server.auth.default("jwt");
```

This will make every route require jwt authentication by default.

## Authenticate

Save the token in the cookie. It will be used for authentication.

```js
handler: (request, h) => h.response("authenticated!").state("token", token);
```

## Further reading

- [hapi-auth-jwt2 - npm](https://www.npmjs.com/package/hapi-auth-jwt2)
- [hapi-auth-jwt2 - GitHub](https://github.com/dwyl/hapi-auth-jwt2)
