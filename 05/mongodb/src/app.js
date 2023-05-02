import { MongoClient } from "mongodb";
import * as examples from "./examples.js";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

await client.connect();
console.log("Connected successfully to server");

const db = client.db("mydb");

console.log(">>> dropDatabase");
await examples.dropDatabase(db);

console.log(">>> dropCollection");
await examples.dropCollection(db);

await client.close();
