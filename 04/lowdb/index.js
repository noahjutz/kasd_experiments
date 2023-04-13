import { fileURLToPath } from "node:url";
import path from "node:path";

import { Low } from "lowdb";

console.log(import.meta.url);
console.log(fileURLToPath(import.meta.url));
console.log(path.dirname(fileURLToPath(import.meta.url)));
