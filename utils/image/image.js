import mongoose from "mongoose"
import Image from "../../models/Image.js"
import { AppError } from "../appError.js"

export const getImage = async (req, res, next) => {
  const id = req.params.id
  if (!mongoose.isValidObjectId(id)) {
    return next(new AppError("Invalid ID", 300))
  }
  try {
    const doc = await Image.findOne({ _id: id })
    if (!doc) {
      return next(new AppError("Not Found", 404))
    }
    res.set("Content-Type", doc.type)
    res.send(Buffer.from(doc.base64Data, "base64"))
  } catch (error) {
    if (error) {
      console.error(error)
      return next(new AppError("Internal Server Error", 500))
    }
  }
}

export const UploadImage = async (name, base64Data, userId) => {
  try {
    const parts = base64Data.split(";base64,")
    const type = parts[0].split(":")[1]
    const base64String = parts[1]

    const image = await Image.create({
      name,
      type,
      user: userId,
      base64Data: base64String,
    })
    return image._id
  } catch (error) {
    throw new AppError("Internal Server Error", 500)
  }
}

export const deleteImage = async (ImageId) => {
  try {
    await Image.deleteOne({ _id: ImageId })
  } catch (error) {
    throw new AppError("Internal Server Error", 500)
  }
}
