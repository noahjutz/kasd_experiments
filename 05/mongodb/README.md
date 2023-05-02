# MongoDB Node.js Driver

## [Install](https://www.npmjs.com/package/mongodb?activeTab=readme)

```sh
npm i mongodb
```

## [Connect](https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/)

API Reference: [`MongoClient`](https://mongodb.github.io/node-mongodb-native/5.3/classes/MongoClient.html)

```js
import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
await client.connect();
await client.close();
```

## Database

API Reference: [`Db`](https://mongodb.github.io/node-mongodb-native/5.3/classes/Db.html)

```js
const db = client.db(dbName);
await db.dropDatabase();
```

## Collections

API Reference: [`Collection`](https://mongodb.github.io/node-mongodb-native/5.3/classes/Collection.html)

```js
const coll = await db.collection("mycoll");
await db.dropCollection("mycoll");
```

## [Documents](https://www.mongodb.com/docs/drivers/node/current/quick-reference)

### Create

```js
await coll.insertOne({ filter });
```

### Read

```js
const cursor = coll.find();
for await (const o of cursor) console.log(o);
```

### Update

```js
await coll.updateOne({ filter }, { updateOps });
```

### Delete

```js
await coll.deleteOne({ filter });
```

## Further reading

- [Documentation](https://www.mongodb.com/docs/drivers/node/current/)
- [API Reference](https://mongodb.github.io/node-mongodb-native/5.3/index.html)
