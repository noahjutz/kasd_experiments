import Hapi from "@hapi/hapi";
import mongoose from "mongoose";

const server = Hapi.server({
  port: 3000,
});

export const start = async () => {
  server.route({
    method: "GET",
    path: "/",
    handler: () => "Hello, World!",
  });

  await mongoose.connect("mongodb://127.0.0.1:27017/posts");
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

export const stop = async () => {
  await server.stop();
  await mongoose.disconnect();
  console.log("Server stopped");
};
