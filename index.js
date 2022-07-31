const path = require('path')

module.exports = (filePath) => {
  return require(
    path.resolve(
      process.env.NODE_ENV === 'local' ?
      filePath : `./${value.split('/').filter(i => i !== '..').join('/')}`)
  )
}