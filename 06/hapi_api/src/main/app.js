import * as server from "./server.js";

await server.start();

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
