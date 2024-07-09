import mongoose from "mongoose"

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
  name: { type: String, required: true },
  imageUrl: { type: mongoose.Schema.Types.ObjectId },
  servicesProvided: [{ type: String, trim: true }],
  servicesRequested: [{ type: String, trim: true }],
  bio: {
    type: String,
    default:
      "Professional problem solver. Fluent in sarcasm. Saving the world one algorithm at a time.",
  },
  phoneNumber: { type: Number },
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], default: [0, 0] },
  },
})

// const queryCoordinates = [-74.006, 40.7128]; // [longitude, latitude]
// User.find({
//   location: {
//     $near: {
//       $geometry: {
//         type: 'Point',
//         coordinates: queryCoordinates
//       },
//       $maxDistance: 1000 // Distance in meters
//     }
//   }
// })
// const { minLat, maxLat, minLng, maxLng } = req.body; // Map view bounds
// const users = await User.find({
//   location: {
//     $geoWithin: {
//       $box: [
//         [minLng, minLat], // Southwest coordinates
//         [maxLng, maxLat]  // Northeast coordinates
//       ]
//     }
//   }
// });
profileSchema.index({ location: "2dsphere" })
const Profile = mongoose.model("Profile", profileSchema)

export default Profile
