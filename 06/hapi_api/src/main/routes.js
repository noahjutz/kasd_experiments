import { getPosts } from "./controller.js";

export default [
  {
    path: "/",
    method: "GET",
    handler: () => "Hello, World!",
  },
  {
    path: "/posts",
    method: "GET",
    handler: getPosts,
  },
];
