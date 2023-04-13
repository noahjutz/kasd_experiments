const Hapi = require("@hapi/hapi");
const Path = require("path");

const server = Hapi.server({
  port: 3000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, "public"),
    },
  },
});

const init = async () => {
  await server.register(require("@hapi/inert"));
  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => h.file("index.html"),
  });
  await server.start();
  console.log("Running at " + server.info.uri);
};

init();
