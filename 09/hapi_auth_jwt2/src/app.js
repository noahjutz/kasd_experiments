import Hapi from "@hapi/hapi";
import hapijwt from "hapi-auth-jwt2";
import jwt from "jsonwebtoken";

const validate = async (decoded, request, h) => ({ isValid: true });

const init = async () => {
  const server = Hapi.server({ port: 3000 });

  await server.register(hapijwt);
  server.auth.strategy("jwt", "jwt", { key: "secret", validate });
  server.auth.default("jwt");

  server.route([
    {
      options: { auth: false },
      method: "GET",
      path: "/",
      handler: (request, h) => {
        return "<a href='/signup'>sign up</a>";
      },
    },
    {
      options: { auth: false },
      method: "GET",
      path: "/signup",
      handler: (request, h) => {
        const response = h
          .redirect("/dashboard")
          .state(
            "token",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o"
          );
        return response;
      },
    },
    {
      method: "GET",
      path: "/dashboard",
      handler: () => "dashboard",
    },
  ]);
  await server.start();
};

init();
