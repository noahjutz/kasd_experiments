import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

await client.connect();
console.log("Connected successfully to server");

const tDropDatabase = async () => {
  const db = client.db("mydb");
  await db.collection("mycoll").insertOne({ name: "Joe" });

  console.log(await db.stats());
  await db.dropDatabase();
  console.log(await db.stats());
};

await tDropDatabase();

await client.close();
