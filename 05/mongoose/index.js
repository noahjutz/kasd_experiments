import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/kittydb");

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model("Kitten", kittySchema);

const fluffy = new Kitten({ name: "Fluffy" });

await fluffy.save();

const kitties = await Kitten.find();
console.log(kitties);

// mongoose.connection.dropCollection("kittens")