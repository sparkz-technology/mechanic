import express from "express"

const router = express.Router()

import validateRequest from "../middlewares/validateRequest.js"
import { getProfile, updateProfile } from "../controllers/profile.js"
import { profileUpdateSchema } from "../validators/profile.js"
import isAuth from "../middlewares/isAuth.js"

const updateValidation = validateRequest(profileUpdateSchema, {
  abortEarly: false,
})

router.get("/profile", isAuth, getProfile)
router.put("/update-profile", isAuth, updateValidation, updateProfile)

export default router
