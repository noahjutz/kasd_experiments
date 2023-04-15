import Hapi from "@hapi/hapi";
import Vision from "@hapi/vision";
import Handlebars from "handlebars";
import Joi from "joi";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as schemas from "./joi_schemas.js";

const __dirname = dirname(join(fileURLToPath(import.meta.url)));

const init = async () => {
  const server = Hapi.server({ port: 3000, host: "localhost" });

  await server.register(Vision);

  server.validator(Joi);

  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: "views",
    partialsPath: "views",
    layout: true,
  });

  server.ext("onPreResponse", (request, h) => {
    if (!request.response.isBoom) return h.continue;

    const e = request.response.details;
    const error = {
      email: e.filter((e) => e.path.includes("email")).map((e) => e.message),
      password: e
        .filter((e) => e.path.includes("password"))
        .map((e) => e.message),
    };
    return h.view("login/index", { error: error });
  });

  server.route([
    {
      method: "GET",
      path: "/",
      handler: (_, h) => h.view("login/index"),
    },
    {
      method: "POST",
      path: "/",
      handler: (_, h) => h.redirect("/dashboard"),
      options: {
        validate: {
          payload: schemas.login,
          options: { abortEarly: false },
          failAction: (request, h, err) => err,
        },
      },
    },
    {
      method: "GET",
      path: "/dashboard",
      handler: (_, h) => h.view("dashboard/index"),
    },
  ]);

  await server.start();
  console.log("Server running on " + server.info.uri);
};

init();
