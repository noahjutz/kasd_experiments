import { MongoClient } from "mongodb";
import ax from "axios";

export const mongo = new MongoClient("mongodb://127.0.0.1:27017");

export const posts = mongo.db("posts").collection("posts");

export const axios = ax.create({ baseURL: "http://localhost:3000" });
