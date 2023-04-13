import Hapi from "@hapi/hapi";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/test",
    handler: (request, h) => {
      return "Hello Test!";
    },
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      console.log(h.myPlugin());
      return "Hi";
    },
  });

  server.ext("onRequest", (request, h) => {
    // extension point
    return h.continue;
  });

  const plugin = {
    name: "myPlugin",
    register: async (server, options) => {
      const currentDate = () => {
        const date = new Date();
        return date;
      };

      server.decorate("toolkit", "myPlugin", currentDate);
    },
  };

  await server.register({ plugin: plugin });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
