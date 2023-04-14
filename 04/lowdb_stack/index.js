import Hapi from "@hapi/hapi";
import Vision from "@hapi/vision";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import Handlebars from "handlebars";
// eslint-disable-next-line import/no-unresolved
import { Low } from "lowdb";
// eslint-disable-next-line import/no-unresolved
import { JSONFile } from "lowdb/node";

const dir = dirname(fileURLToPath(import.meta.url));
const db = new Low(new JSONFile(join(dir, "db.json")));

const initDb = async () => {
  await db.read();
  db.data ||= { users: [] };
  await db.write();
};

const initSrv = async () => {
  const server = Hapi.server({ port: 3000 });

  await server.register(Vision);

  server.views({
    engines: {
      hbs: Handlebars,
    },
    relativeTo: dir,
    path: "views",
    partialsPath: "views",
    layout: true,
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      db.read();
      return h.view("index", { users: db.data.users });
    },
  });

  await server.start();
};

await initDb();
await initSrv();
