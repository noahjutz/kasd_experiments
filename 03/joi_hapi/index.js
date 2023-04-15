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

  server.ext("onPreResponse", (request, h) => {
    const response = request.response;
    if (!response.isBoom) return h.continue;

    if (request.route.path === "/submit") {
      // TODO group details by path
      // const errors = response.details.group(({ path }) => path);
      return h.view("form", { errors: response.details });
    }
  });

  server.route([
    {
      method: "GET",
      path: "/",
      handler: (request, h) => h.view("form"),
    },
    {
      method: "GET",
      path: "/submit",
      handler: (request, h) => {
        const { name, username, email } = request.query;
        return h.view("results", { ...request.query });
      },
      options: {
        validate: {
          options: { abortEarly: false },
          query: Joi.object({
            name: Joi.string().alphanum().min(3).max(10),
            username: Joi.string().alphanum().min(3).max(10).required(),
            email: Joi.string().email(),
          }),
          failAction: (request, h, err) => {
            throw err;
          },
        },
      },
    },
  ]);

  await server.start();
  console.log("Server running on " + server.info.uri);
};

init();
