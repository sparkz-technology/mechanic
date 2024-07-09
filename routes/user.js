

import express from "express"

const router = express.Router()

import {
  createUser,
  forgotPassword,
  loginUser,
  resetPassword,
} from "../controllers/auth.js"
import { createSchema } from "../validators/user.js"
import validateRequest from "../middlewares/validateRequest.js"

const createValidation = validateRequest(createSchema, {
  abortEarly: false,
})

router.post("/login", loginUser)
router.post("/register", createValidation, createUser)
router.post("/forgotpassword", forgotPassword)
router.post("/resetpassword", resetPassword)

export default router

