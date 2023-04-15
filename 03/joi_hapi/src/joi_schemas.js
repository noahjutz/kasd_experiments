import Joi from "joi";

export const login = {
  password: Joi.string().alphanum().min(3).max(10).required(),
  email: Joi.string().email().required(),
};
