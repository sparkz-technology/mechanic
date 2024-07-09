import dotenv from "dotenv"
dotenv.config()
const requiredEnvVars = [
  "MONGO_URL",
  "PORT",
  "IMAGE_BASE_URL",
  "NODE_ENV",
  "JWT_SECRET",
  "JWT_EXPIRES_IN",
  "AUTH_EMAIL_PASSWORD",
  "AUTH_EMAIL",
  "TO_EMAIL",
]

const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key])

if (missingEnvVars.length > 0) {
  throw new Error(`Missing environment variables: ${missingEnvVars.join(", ")}`)
}
const constant = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
  IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  AUTH_EMAIL_PASSWORD: process.env.AUTH_EMAIL_PASSWORD,
  AUTH_EMAIL: process.env.AUTH_EMAIL,
  TO_EMAIL: process.env.TO_EMAIL,
}
export default constant
