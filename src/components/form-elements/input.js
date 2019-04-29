riot.tag2('vp-input', '<div class="vp-input-container"> <i data-icontype="left" class="{this.opts.iconleft}" if="{this.opts.iconleft}"></i> <i class="v-icon-close-circle" if="{this.opts.iconclose}" onclick="{clearField}"></i> <label riot-style="{checkLabelStyles()}" onclick="{focusOnInput}">{this.opts.label}</label> <input autocomplete="off" riot-style="{returnClass()}" type="{this.opts.type}" name="{this.opts.name}" riot-value="{this.opts.value}" onkeyup="{showHideClearButton}" onfocus="{hidePlaceHolder}" onblur="{showPlaceHolder}"> </div>', '', '', function(opts) {
    const self = this;
    this.noop = function() {}.bind(this);
    this.oneTimeValueSet = function() {
      self.oneTimeValueSet = self.noop;
      self.hidePlaceHolder();
    }.bind(this)
    this.showHideClearButton = function(e) {
      if(e.which === 9) return false;
      const closeElem = self.root.querySelector('.v-icon-close-circle');
      const inputElem = self.root.querySelector('input');
      if (closeElem && inputElem && inputElem.value === '') {
        closeElem.style.display = 'none';
      } else if (closeElem) {
        closeElem.style.display = 'block';
      }
      if (inputElem.value === '') {
        inputElem.blur();
      }
      self.hideLabel(inputElem);
    }.bind(this)
    this.returnClass = function() {
      let str = '';
      if (self.opts.iconleft) {
        str += 'padding-left: 30px; ';
      }
      if (self.opts.iconClose) {
        str += 'padding-right: 30px; '
      }
      if (self.opts.color) {
        str += `color: ${self.opts.color}; `
      }
      return str;
    }.bind(this)
    this.clearField = function() {
      self.root.querySelector('input').value = '';
      self.showHideClearButton();
    }.bind(this)
    this.hidePlaceHolder = function() {
      self.root.querySelector('label').classList.add('active');
      self.root.querySelector('.vp-input-container').classList.add('dark');
    }.bind(this)
    this.showPlaceHolder = function() {
      const inputElem = self.root.querySelector('input');
      self.hideLabel(inputElem);
    }.bind(this)
    this.hideLabel = function(el) {
      if (el.value === '') {
        self.root.querySelector('label').classList.remove('active');
        self.root.querySelector('.vp-input-container').classList.remove('dark');
      }
    }.bind(this)
    this.checkLabelStyles = function() {
      let str = '';
      if (self.opts.iconleft) {
        str += `left: 40px; `
      }
      if (self.opts.background) {
        str += `background: ${self.opts.background}; `;
      }
      if (self.opts.color) {
        str += `color: ${self.opts.color}; `;
      }
      if (self.opts.value && self.opts.value !== '') {
        setTimeout(function() {
          self.oneTimeValueSet();
        });
      }
      return str;
    }.bind(this)
    this.focusOnInput = function() {
      if (self.root.querySelector('input')) {
        self.root.querySelector('input').focus();
      }
    }.bind(this)
});
