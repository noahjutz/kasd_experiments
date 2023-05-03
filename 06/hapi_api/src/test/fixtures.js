import { MongoClient } from "mongodb";
import ax from "axios";

export const mongo = new MongoClient("mongodb://127.0.0.1:27017");

export const db = mongo.db("test");

export const axios = ax.create({ baseURL: "http://localhost:3000" });
