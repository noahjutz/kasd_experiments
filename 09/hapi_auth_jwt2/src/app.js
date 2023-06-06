import Hapi from "@hapi/hapi";
import hapijwt from "hapi-auth-jwt2";
import jwt from "jsonwebtoken";

const validate = async (decoded, request, h) => ({ isValid: true });

const init = async () => {
  const server = Hapi.server({ port: 3000 });

  await server.register(hapijwt);
  server.auth.strategy("jwt", "jwt", { key: "secret", validate });
  server.auth.default("jwt");

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => h.response("hi"),
  });
  await server.start();
};

init();
