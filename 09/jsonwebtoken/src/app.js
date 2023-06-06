import Hapi from "@hapi/hapi";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import Vision from "@hapi/vision";
import Handlebars from "handlebars";
import jwt from "jsonwebtoken";

const __dirname = dirname(fileURLToPath(import.meta.url));

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    routes: { files: { relativeTo: __dirname } },
  });

  await server.register(Vision);

  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: ".",
  });

  server.route([
    {
      method: "GET",
      path: "/",
      handler: (request, h) => {
        const params = request.query;
        const key = "secret";
        const token = jwt.sign(params, key);
        const decoded = jwt.verify(token, key);
        return h.view("index.hbs", {
          token: token,
          parameters: JSON.stringify(params),
          decoded: JSON.stringify(decoded),
        });
      },
    },
  ]);

  await server.start();
};

init();
