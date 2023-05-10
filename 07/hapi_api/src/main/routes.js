import { getPosts, getPost, putPost } from "./controller.js";

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
  {
    path: "/post/{id}",
    method: "GET",
    handler: getPost,
  },
  {
    path: "/post/{id}",
    method: "PUT",
    handler: putPost,
  },
];
