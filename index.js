const path = require('path')

module.exports = (filePath) => {
  return require(
    path.resolve(
      process.env.NODE_ENV === 'local' ?
      filePath : `./${filePath.split('/').slice(-1)[0]}`)
  )
}
