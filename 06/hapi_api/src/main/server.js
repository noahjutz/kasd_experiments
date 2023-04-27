import Hapi from "@hapi/hapi";

const server = Hapi.server({
  port: 3000,
});

export const start = async () => {
  server.route({
    method: "GET",
    path: "/",
    handler: () => "Hello, World!",
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

export const stop = async () => {
  await server.stop();
  console.log("Server stopped");
};
