# lowdb

## Installation

```
npm i lowdb
```

```js
import { Low } from "lowdb";
```

## \_\_dirname is not defined in in ES Module scope

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
