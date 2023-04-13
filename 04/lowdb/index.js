import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { Low } from "lowdb";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");
