# Hapi Cookie

## Usage

### Setup

```js
server.state("mydata", {
  encoding: "base64json",
  clearInvalid: true,
});
```

### Set the cookie

```js
h.state("mydata", {});
```

### Read the cookie

```js
const cookie = request.state.mydata;
```

### Update the cookie

```js
h.state("mydata", { ...request.state.mydata /* , ... */ });
```

### Delete the cookie

```js
h.unstate("mydata");
```
