const Handlebars = require("handlebars");
const Hapi = require("@hapi/hapi");
const Vision = require("@hapi/vision");

const server = Hapi.server({ port: 3000 });

const provision = async () => {
  await server.register(Vision);

  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: __dirname,
    path: "views",
    partialsPath: "views",
    helpersPath: "views/helpers",
    layout: true,
  });

  server.route([
    {
      method: "GET",
      path: "/",
      handler: {
        view: {
          template: "profile/profile",
          context: {
            title: "Home page",
          },
        },
      },
    },
  ]);

  await server.start();
  console.log("Server running at " + server.info.uri);
};

provision();
