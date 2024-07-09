import Profile from "../models/Profile.js"
import { AppError } from "../utils/appError.js"
import { isValidUrl } from "../utils/helper.js"
import { UploadImage } from "../utils/image/Image.js"

export const getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.userId })
    if (!profile) {
      return next(new AppError("There is no profile for this user", 404))
    }
    res.json(profile)
  } catch (error) {
    next(error)
  }
}

export const updateProfile = async (req, res, next) => {
  const { name, servicesProvided, bio, location, imageUrl, servicesRequested } =
    req.body

  try {
    let profile = await Profile.findOne({ userId: req.userId })
    if (!profile) {
      return next(new AppError("There is no profile for this user", 404))
    }
    if (isValidUrl(imageUrl)) {
      const uploadedImageId = await UploadImage(name, imageUrl, req.userId)
      profile.imageUrl = uploadedImageId
    }
    profile.name = name
    profile.servicesProvided = servicesProvided ?? []
    profile.servicesRequested = servicesRequested ?? []
    profile.bio = bio
    profile.location = location

    await profile.save()

    res.status(200).json({
      status: "success",
      message: "Profile updated successfully",
      data: profile,
    })
  } catch (error) {
    next(error)
  }
}
