import Hapi from "@hapi/hapi";
import Vision from "@hapi/vision";
import Inert from "@hapi/inert";
import HapiSwagger from "hapi-swagger";

const swaggerOptions = {
  info: {
    title: "kasd_experiments OpenAPI test API",
    version: "1.0.0-dev01",
  },
};

const init = async () => {
  const server = Hapi.server({ port: 3000 });

  await server.register([
    Vision,
    Inert,
    { plugin: HapiSwagger, options: swaggerOptions },
  ]);

  server.route([
    {
      method: "GET",
      path: "/",
      handler: () => "Hello, World!",
      config: {
        tags: ["api"],
        description: "hello, world.",
      },
    },
  ]);

  await server.start();
};

init();
