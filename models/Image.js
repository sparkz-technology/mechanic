import mongoose from "mongoose"

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: { type: String, required: true },
  base64Data: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

const Image = mongoose.model("Image", imageSchema)

export default Image
