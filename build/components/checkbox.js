riot.tag2('vp-checkbox', '<label class="{returnStyles(\'element-container\', this.opts.type)}">{this.opts.label} <input type="checkbox" name="{this.opts.name}" riot-value="{this.opts.value}" checked="{(this.opts.checked && JSON.parse(this.opts.checked)) ? true : false;}" disabled="{(this.opts.type && this.opts.type.indexOf(\'disabled\') > -1) ? true : false;}"> <span class="{returnStyles(\'checkmark\', this.opts.type)}"></span> </label>', '', '', function(opts) {
    this.returnStyles = function(initialClass, type) {
      if (!type)  return initialClass;
      let tmp = type.split(',')
      let str = '';
      tmp.forEach((o) => {
        str += `${o} `
      });
      return `${initialClass} ${str.trim()}`
    }.bind(this)
});
