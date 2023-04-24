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

## Many-to-Many

## Further reading

- [Model Relationships Between Documents - MongoDB](https://www.mongodb.com/docs/v6.0/applications/data-models-relationships/)
