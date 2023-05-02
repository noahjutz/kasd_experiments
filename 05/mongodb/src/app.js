import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

await client.connect();
console.log("Connected successfully to server");

const db = client.db("mydb");
const coll = db.collection("mycoll");
const doc = await coll.findOne();
console.log(doc); // todo
await db.dropDatabase();

await client.close();
