import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");

const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

db.data ||= { posts: [] };

db.data.posts.push("Hello World");

const firstPost = db.data.posts[0];

await db.write();
