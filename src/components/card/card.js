riot.tag2('vp-card', '<div class="v-card {returnClass(this.opts.type)}"> {this.root._innerHTML} </div>', '', '', function(opts) {
    this.returnClass = function(type) {
      if (!type)  return false;
      let tmp = type.split(',')
      let str = ''
      tmp.forEach((o) => {
        str += `${o} `
      })
      return `${str.trim()}`
    }.bind(this)
});