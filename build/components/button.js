riot.tag2('vp-button', '<button class="{returnClass(this.opts.type)}"> <i class="{this.opts.icon}" if="{this.opts.icon}"></i> {this.opts.title || this.root._innerHTML} </button>', '', '', function(opts) {
    this.returnClass = function(type) {
      let tmp = type.split(',')
      let str = ''
      tmp.forEach((o) => {
        str += `btn-${o} `
      })
      return `btn ${str}`
    }.bind(this)
});