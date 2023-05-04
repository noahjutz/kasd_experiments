import mongoose from "mongoose";
import { Boom } from "@hapi/boom";

const Post = mongoose.model("Post", { text: String });

export const getPosts = async (request, h) => {
  console.log(await Post.find());
  return Post.find();
};
