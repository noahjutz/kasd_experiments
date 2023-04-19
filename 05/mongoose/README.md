# Mongoose

## Install

```
npm i mongoose
```

## Usage

### [Databases](https://mongoosejs.com/docs/connections.html)

Select the database in the connection URL. Databases are created lazily just like with mongosh.

```js
mongoose.connect("mongodb://127.0.0.1:27017/mydb");
```

To drop a database, call [`dropDatabase`](<https://mongoosejs.com/docs/api/connection.html#Connection.prototype.dropDatabase()>)

### [Collections](https://mongoosejs.com/docs/models.html)

To create a collection, compile a model:

```js
const Post = mongoose.model("Post", schema); // creates db.posts
```

Mongoose automatically looks for the plural, lowercased version of your model name.

To drop a collection, call [`dropCollection`](<https://mongoosejs.com/docs/api/connection.html#Connection.prototype.dropCollection()>).

```js
mongoose.connection.dropCollection("posts");
```

### [Documents](https://mongoosejs.com/docs/documents.html)

Documents are instances of models.

```js
const myPost = new Post({...})
```

#### CRUD Operations

```js
const myPost = new Post({...}) // Create
await Post.find(filter) // Read
await Post.updateOne(filter, update) // Update
await Post.deleteOne(filter) // Delete
```

## Further reading

- [Documentation - mongoose](https://mongoosejs.com/docs/index.html)
