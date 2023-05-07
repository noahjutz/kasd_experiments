import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const get = () => client.get("/posts/1");

const post = () =>
  client.post("/posts", {
    title: "My post",
    body: "Hello guys!",
    userId: 1,
  });

const put = () =>
  client.put("/posts/1", {
    title: "Updated post",
    body: "Hello world.",
    userId: 1,
  });

const patch = () => client.patch("/posts/1", { title: "Patched title" });

const _delete = () => client.delete("/posts/1");

// other http methods:
// - connect
// - options
// - trace
// - head