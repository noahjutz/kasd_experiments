import Joi from "joi";

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(10),

  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),

  repeat_password: Joi.ref("password"),

  birth_year: Joi.number().integer().min(1900).max(2030),

  email: Joi.string().email(),
})
  .with("username", "birth_year")
  .or("username", "email");

const w = schema.validate({ username: "Hello", birth_year: 2020 });
const v = schema.validate({ email: "G.hello@world.de" });

console.log(v);
