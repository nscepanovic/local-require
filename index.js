module.exports = (path) => {
  return require(process.env.NODE_ENV !== 'local' ? path : `./${path.split('/').slice(-1)[0]}`)
}
