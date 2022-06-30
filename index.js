module.exports = (path) => {
  return require(process.env.NODE_ENV !== 'local' ? path.split('/').slice(-1)[0] : `./${path}`)
}