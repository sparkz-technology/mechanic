import { Router } from "express"

import { getImage } from "../utils/image/image.js"
import userRouter from "../routes/user.js"
import profileRouter from "../routes/profile.js"

const router = Router()

router.use("/", userRouter)
router.use("/", profileRouter)
router.get("/img/:id", getImage)

export default router
