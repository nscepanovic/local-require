if (process.env.NODE_ENV !== 'local') {
  const Module = require('module');
  const originalRequire = Module.prototype.require;

  Module.prototype.require = function () {
    const args = {}
    Object.keys(arguments).forEach(key => {
      const value = arguments[key]
      args[key] = value.startsWith('../') ?
        './' + value.split('/').filter(i => i !== '..').join('/') :
        value
    })
    console.log('args', args)
    return originalRequire.apply(this, args);
  };
}
