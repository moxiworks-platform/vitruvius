riot.tag2('vp-button', '<button id="{this.opts.id}" class="{returnClass(this.opts.type)}" if="{!this.opts.href}"> <i class="{this.opts.icon}" if="{this.opts.icon}"></i> {this.opts.title || this.root._innerHTML} </button> <a id="{this.opts.id}" class="{returnClass(this.opts.type)}" href="{this.opts.href}" target="{this.opts.target || \'\'}" if="{this.opts.href}"> {this.opts.title || this.root._innerHTML} </a>', '', '', function(opts) {
    this.returnClass = function(type) {
      let tmp = type.split(',')
      let str = ''
      tmp.forEach((o) => {
        str += `btn-${o} `
      })
      return `btn ${str}`
    }.bind(this)
});