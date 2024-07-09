import constant from "../../configs/constant.js"

const { IMAGE_BASE_URL } = constant

export function imageUrl(imageId) {
  return `${IMAGE_BASE_URL}/${imageId}`
}

import mongoose from "mongoose"

export const setImageVirtuals = (schema) => {
  schema.virtual("imageUrl").get(() => {
    const serverUrl = `${IMAGE_BASE_URL}`
    return `${serverUrl}/uploads/${this.imageFileName}`
  })
  schema.set("toJSON", { virtuals: true })
}
