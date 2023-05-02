export const dropDatabase = async (db) => {
  await db.collection("mycoll").insertOne({ name: "Joe" });

  console.log(await db.stats());
  await db.dropDatabase();
  console.log(await db.stats());
};

export const dropCollection = async (db) => {
  const coll = await db.collection("mycoll");

  await coll.insertOne({ name: "Jeff" });

  console.log("Before:");
  for await (const o of coll.find()) console.log(o);
  await db.dropCollection("mycoll");
  console.log("After:");
  for await (const o of coll.find()) console.log(o);
};
