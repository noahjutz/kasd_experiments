import { getPosts } from "./controller.js";

export default [
  {
    method: "GET",
    path: "/",
    handler: () => "Hello, World!",
  },
  {
    method: "GET",
    path: "/posts",
    handler: getPosts,
  },
];
