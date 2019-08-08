class NoConsoleWebpackPlugin {
  constructor(options) {
    console.log(options)
    this.options = options ? options : {}
    if(Object.prototype.toString.call(this.options.type) === '[object Array]') {
      this.type = this.options.type.slice()
    }
    if(Object.prototype.toString.call(this.options.type) === '[object String]') {
      this.type = [ this.options.type ]
    }
    if(!this.options.type) {
      this.type = Object.getOwnPropertyNames(console)
    }
  }
}

NoConsoleWebpackPlugin.prototype.apply = function(compiler) {
  const _this = this
  compiler.hooks.emit.tapAsync('NoConsoleWebpackPlugin', (compilation, cb) => {
    compilation.chunks.forEach(function(chunk) {
      chunk.files.forEach(function(filename) {
        var source = compilation.assets[filename].source();
        _this.type.forEach(type => {
          let reg = new RegExp(`console.${type}`, 'g')
          source = source.replace(reg, `;(function(){})`)
        })
        compilation.assets[filename] = {
          source: function() {
            return source
          },
          size: function() {
            return source.length
          }
        }
      });
    });
    cb()
  })
}
module.exports = NoConsoleWebpackPlugin
