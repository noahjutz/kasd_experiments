import mongoose from "mongoose";
import { Boom } from "@hapi/boom";

const Post = mongoose.model("Post", { text: String });

export const getPosts = (request, h) => Post.find();

export const getPost = (request, h) => Post.findOne({ _id: request.params.id });
