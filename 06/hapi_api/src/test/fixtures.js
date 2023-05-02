import { MongoClient } from "mongodb";
import ax from "axios";

export const mochaGlobalSetup = async () => {
  await mongo.connect();
};

export const mochaGlobalTeardown = async () => {
  await mongo.close();
};

export const mongo = new MongoClient("mongodb://127.0.0.1:27017");

export const axios = ax.create({ baseURL: "http://localhost:3000" });
