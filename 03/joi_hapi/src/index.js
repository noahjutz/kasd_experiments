import Hapi from "@hapi/hapi";
import Vision from "@hapi/vision";
import Handlebars from "handlebars";
import Joi from "joi";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(join(fileURLToPath(import.meta.url)));

const init = async () => {
  const server = Hapi.server({ port: 3000, host: "localhost" });

  await server.register(Vision);

  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: "views",
    partialsPath: "views",
    layout: true,
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
          payload: Joi.object({
            password: Joi.string().alphanum().min(3).max(10).required(),
            email: Joi.string().email().required(),
          }),
          options: { abortEarly: false },
          failAction: "error",
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
