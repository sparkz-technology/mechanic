import mongoose from "mongoose"
import constant from "./constant.js"

const { MONGO_URL } = constant

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL)
    console.log("MongoDB connected:", mongoose.connection.host)
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err)
    })
    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected")
    })
  } catch (error) {
    console.error("MongoDB connection error:", error.message)
    process.exit(1)
  }
}

export default connectDB
