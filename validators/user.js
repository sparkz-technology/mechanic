import Joi from "joi"
export const createSchema = Joi.object({
  username: Joi.string().required().messages({
    "any.required": "Username is required",
    "string.empty": "Username cannot be empty",
  }),
  password: Joi.string()
    .min(8)
    .messages({
      "string.min": "Password must be at least {#limit} characters long",
    })
    .pattern(new RegExp("(?=.*[a-z])"))
    .messages({
      "string.pattern.base":
        "Password must include at least one lowercase letter",
    })
    .pattern(new RegExp("(?=.*[A-Z])"))
    .messages({
      "string.pattern.base":
        "Password must include at least one uppercase letter",
    })
    .pattern(new RegExp("(?=.*[0-9])"))
    .messages({
      "string.pattern.base": "Password must include at least one number",
    })
    .pattern(new RegExp("(?=.*[!@#$%^&*])"))
    .messages({
      "string.pattern.base":
        "Password must include at least one special character",
    })
    .required()
    .messages({
      "any.required": "Password is required",
      "string.empty": "Password cannot be empty",
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "any.required": "E-mail is required",
      "string.empty": "Email cannot be empty",
      "string.email": "Invalid e-mail format",
    }),
  name: Joi.string().required().messages({
    "any.required": "Name is required",
    "string.empty": "Name cannot be empty",
  }),
  phoneNumber: Joi.string()
    .trim()
    .regex(/^[0-9]{10}$/)
    .required()
    .messages({
      "any.required": "Phone number is required",
      "string.empty": "Phone number cannot be empty",
      "string.pattern.base": "Phone number must be exactly 10 digits",
    }),
  role: Joi.string().valid("user", "mechanic", "").default("user"),
})
export const loginSchema = Joi.object({
  identifier: Joi.string().required(),
  password: Joi.string().required(),
})
export const forgetPasswordSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "Email must be a string",
      "string.email": "Invalid email format",
      "any.required": "Email is required",
    }),
})
export const resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  password: Joi.string()
    .min(8)
    .required()
    .pattern(
      new RegExp(
        "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$"
      )
    )
    .messages({
      "string.base": "Password must be a string",
      "string.empty": "Password is required",
      "string.min": "Password must be at least {#limit} characters long",
      "string.pattern.base":
        "Password must contain at least one letter, one number, and one special character (!@#$%^&*)",
    }),
})
