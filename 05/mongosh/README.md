# Getting started with MongoDB

## Install

```sh
yay -S mongodb-bin
```

## Run

```sh
systemctl start mongodb
mongosh
```

## Mongosh

### [Help](https://www.mongodb.com/docs/mongodb-shell/run-commands)

```js
test > help(); // shell help
test > db.createCollection.help(); // context specific help
```

### [Databases](https://www.mongodb.com/basics/create-database)

```js
test> show dbs // list
test> db // show current

test> use <db> // switch database (lazy creation)
test> db.dropDatabase() // delete current
```

### [Collections](https://www.mongodb.com/docs/manual/core/databases-and-collections)

```js
test > db.getCollectionNames(); // list
test > db.getCollectionInfos(); // list verbose

test > db.myCollection; // (lazy creation)
test > db.myCollection.drop(); // delete
```

### [Documents](https://www.mongodb.com/docs/mongodb-shell/crud)

```js
test> db.myCollection.find() // list

test> db.myCollection.insertOne({...}) // insert
test> db.myCollection.updateOne(
  {/* filter */},
  {/* Update Operators */}
) // update
test> db.myCollection.deleteOne({/*filter*/}) // delete
```

#### Further reading

- [Update Operators](https://www.mongodb.com/docs/manual/reference/operator/update/)
- [Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query)

## Further reading

- [MongoDB Manual](https://www.mongodb.com/docs/manual/introduction/)
- [MongoDB - ArchWiki](https://wiki.archlinux.org/title/MongoDB)
