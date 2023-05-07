# Axios

## Install

```sh
npm i axios
```

## Setup

```js
const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
```

## Usage

```js
await client.get("/path");
await client.post("/path", { data });
await client.put("/path", { data });
await client.patch("/path", { data });
await client.delete("/path");
```

## Further reading

- [Axios Documentation](https://axios-http.com/docs/intro)
