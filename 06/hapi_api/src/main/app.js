import Hapi from "@hapi/hapi";
import mongoose from "mongoose";
import routes from "./routes.js";

const server = Hapi.server({
  port: 3000,
});

server.route(routes);

const start = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/posts");
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

mongoose.connection.on("error", (err) => {
  console.log(err);
});

mongoose.connection.once("open", function () {
  console.log(`Mongoose connected to ${this.name} on ${this.host}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

await start();
