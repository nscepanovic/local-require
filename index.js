const path = require('path')

module.exports = (filePath) => {
  return require(
    path.resolve(filePath)
  )
}