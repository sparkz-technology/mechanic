// // utils/transformErrors.js
// export default function transformErrors(details) {
//   if (!details || !Array.isArray(details)) {
//     return []
//   }
//   const errorArray = details.map((detail) => ({
//     field: detail.path && detail.path[0],
//     message: detail.message ? detail.message.replace(/['"]/g, "") : "",
//   }))
//   return errorArray
// }
// utils/transformErrors.js
export default function transformErrors(details) {
  if (!details || !Array.isArray(details)) {
    return []
  }
  const filteredDetails = details.filter(
    (detail) => detail && detail.path && detail.path[0]
  )
  const errorMap = filteredDetails.reduce((acc, detail) => {
    const field = detail.path[0]
    const message = detail.message ? detail.message.replace(/['"]/g, "") : ""
    if (field) {
      if (acc[field]) {
        acc[field].message += `. ${message}`
      } else {
        acc[field] = { field, message }
      }
    }
    return acc
  }, {})

  const errorArray = Object.values(errorMap)
  return errorArray
}
