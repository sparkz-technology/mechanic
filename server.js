import app from "./app.js"
import constant from "./configs/constant.js"
import connectDB from "./configs/db.js"
import { URL } from "url" 

const { PORT } = constant
const HOST = "localhost"

try {
  await connectDB()
  app.listen(PORT, HOST, () => {
    const serverUrl = new URL(`http://localhost:${PORT}/`)
    console.log(`Express running → On ${serverUrl}`)
  })
} catch (error) {
  console.error("Database connection error:", error)
  process.exit(1)
}
