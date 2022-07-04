const path = require('path')

module.exports = (filePath) => {
  return require(
    process.env.NODE_ENV === 'local' ?
      path.resolve(filePath) :
      `./${filePath.split('/').slice(-1)[0]}`)
}