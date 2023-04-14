# lowdb

## Installation

```
npm i lowdb
```

## Setup

1. Instantiate a db object:

   ```js
   import { Low } from "lowdb";
   const db = new Low(adapter);
   ```

1. Make an adapter:

   ```js
   import { JSONFile } from "lowdb";
   const adapter = new JSONFile(file);
   ```

1. Get the db file path:
   ```js
   import { join } from "node:path";
   const file = join(__dirname, "db.json");
   ```

## Usage

```js
db.read(); // read db.data from adapter
```

```js
db.write(); // write db.data to adapter
```

```js
db.data // db content
```

## Troubleshooting

### \_\_dirname is not defined in in ES Module scope

1.  ```js
    const url = import.meta.url;
    // file:///home/noah/noah/oth/2023_sose/KASD/kasd_experiments/04/lowdb/index.js:1
    ```

2.  ```js
    import { fileURLToPath } from "node:url";
    const __filename = fileURLToPath(url);
    // /home/noah/noah/oth/2023_sose/KASD/kasd_experiments/04/lowdb/index.js
    ```

3.  ```js
    import { dirname } from "node:path";
    const __dirname = dirname(__filename);
    // /home/noah/noah/oth/2023_sose/KASD/kasd_experiments/04/lowdb
    ```

## Further reading

- [fileURLToPath - nodejs](https://nodejs.org/docs/latest-v18.x/api/url.html#urlfileurltopathurl)
- [dirname - nodejs](https://nodejs.org/docs/latest-v18.x/api/path.html#pathdirnamepath)
- [Top Level Await - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await)
