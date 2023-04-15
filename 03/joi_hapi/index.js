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
    partialsPath: "views/partials",
    layout: true,
  });

  server.route([
    {
      method: "GET",
      path: "/",
      handler: (_, h) => h.redirect("/login"),
    },
    {
      method: "GET",
      path: "/login",
      handler: (_, h) => h.view("login"),
    },
    {
      method: "POST",
      path: "/login",
      handler: (_, h) => h.redirect("/dashboard"),
      options: {
        validate: {
          payload: Joi.object({
            name: Joi.string().alphanum().min(3).max(10),
            username: Joi.string().alphanum().min(3).max(10).required(),
            email: Joi.string().email(),
          }),
          options: { abortEarly: false },
          failAction: "error",
        },
      },
    },
    {
      method: "GET",
      path: "/dashboard",
      handler: (request, h) => h.view("dashboard", { ...request.query }),
    },
  ]);

  await server.start();
  console.log("Server running on " + server.info.uri);
};

init();
