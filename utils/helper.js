export function isValidUrl(urlString) {
  try {
    new URL(urlString)
    return true
  } catch (error) {
    return false
  }
}
