import Joi from "joi"

export const profileUpdateSchema = Joi.object({
  name: Joi.string().required(),
  imageUrl: Joi.string().required(),
  servicesProvided: Joi.array().items(Joi.string().trim()),
  servicesRequested: Joi.array().items(Joi.string().trim()),
  bio: Joi.string().default(
    "Professional problem solver. Fluent in sarcasm. Saving the world one algorithm at a time."
  ),
  phoneNumber: Joi.string()
    .pattern(/^\d{10}$/)
    .required(),
  location: Joi.object({
    type: Joi.string().valid("Point").required(),
    coordinates: Joi.array().items(Joi.number()).length(2).default([0, 0]),
  }).required(),
})
