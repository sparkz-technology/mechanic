import express from "express"
import cors from "cors"
import morgan from "morgan"
import swaggerUi from "swagger-ui-express"

import errorHandler from "./middlewares/errorHandler.js"
import router from "./routes/index.js"
import swaggerDocument from "./configs/swagger_output.json" assert { type: "json" }

const app = express()

app.use(express.json({ limit: "100mb" }))
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "*" }))
app.use(morgan("dev"))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API" })
})
app.use("/api", router)

app.use(errorHandler)
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" })
})

export default app
