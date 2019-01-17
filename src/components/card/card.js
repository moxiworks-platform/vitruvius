import debounce from 'debounce';
riot.tag2('vp-card', '<div class="v-card {returnClass(this.opts.type)}"> <i class="{this.opts.icon}" if="{this.opts.icon}"></i> <div class="rounded-image" riot-style="background-image: url({this.opts.image})" if="{this.opts.image}"></div> {this.root._innerHTML} </div>', '', '', function(opts) {
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