import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOG_DIRECTORY = path.join(__dirname, "../logs")

if (!fs.existsSync(LOG_DIRECTORY)) {
  fs.mkdirSync(LOG_DIRECTORY)
}

const logger = {
  error: (error) => {
    const timestamp = new Date().toISOString()
    const logMessage = `[${timestamp}] ERROR: ${error.message}\n${
      error.stack || ""
    }\n`

    const logFilePath = path.join(LOG_DIRECTORY, "error.log")

    fs.appendFileSync(logFilePath, logMessage)
  },
  info: (message) => {
    const timestamp = new Date().toISOString()
    const logMessage = `[${timestamp}] INFO: ${message}\n`

    const logFilePath = path.join(LOG_DIRECTORY, "info.log")

    fs.appendFileSync(logFilePath, logMessage)
  },
}

export default logger
