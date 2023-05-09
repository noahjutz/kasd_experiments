import mongoose from "mongoose";
import { Boom } from "@hapi/boom";

const Post = mongoose.model("Post", { text: String });

export const getPosts = (request, h) => Post.find();
