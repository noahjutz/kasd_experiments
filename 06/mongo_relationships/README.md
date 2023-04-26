# MongoDB Relationships

## One-to-One

### Embedded

```json
{
  "embedded_value": {
    // ...
  }
}
```

### Subset

User:

```json
{
  "_id": 123
}
```

Profile:

```json
{
  "_id": 124,
  "userId": 123
}
```

## One-to-Many

### [Embedded](https://www.mongodb.com/docs/v6.0/tutorial/model-embedded-one-to-many-relationships-between-documents/)

An array of embedded objects.

```json
{
  "embedded_things": [
    {
      // ...
    }
  ]
}
```

### [Subset](https://www.mongodb.com/docs/v6.0/tutorial/model-referenced-one-to-many-relationships-between-documents/)

See [One-to-One/subset](#subset).

## [Many-to-Many](https://stackoverflow.com/questions/2336700/mongodb-many-to-many-association)

Not necessarily applicable in mongoDB. One solution would be:

```json
{
  "things": ["id1", "id2", ...]
}
```

## Further reading

- [Model Relationships Between Documents - MongoDB](https://www.mongodb.com/docs/v6.0/applications/data-models-relationships/)
