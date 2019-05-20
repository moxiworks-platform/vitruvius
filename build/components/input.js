riot.tag2('vp-input', '<div class="{returnBaseContainerClass()}"> <i data-icontype="left" class="{this.opts.iconleft}" if="{this.opts.iconleft}"></i> <i class="v-icon-close-circle" if="{this.opts.iconclose}" onclick="{clearField}"></i> <label riot-style="{checkLabelStyles()}" onclick="{focusOnInput}">{this.opts.label}</label> <input if="{!this.opts.textarea}" autocomplete="off" id="{this.opts.elemid}" riot-style="{returnClass()}" type="{this.opts.type}" name="{this.opts.name}" riot-value="{this.opts.value}" pattern="{this.opts.pattern}" onkeyup="{showHideClearButton}" onfocus="{hidePlaceHolder}" onblur="{showPlaceHolder}"> <textarea if="{this.opts.textarea}" autocomplete="off" id="{this.opts.elemid}" rows="{this.opts.rows}" riot-style="{returnClass()}" type="{this.opts.type}" name="{this.opts.name}" pattern="{this.opts.pattern}" onkeyup="{showHideClearButton}" onfocus="{hidePlaceHolder}" onblur="{showPlaceHolder}">{this.opts.value}</textarea> </div>', '', '', function(opts) {
    const self = this;
    this.on('mount', (eventName) => {
      const inputElem = (self.opts.textarea) ? self.root.querySelector('textarea') : self.root.querySelector('input');
      inputElem.addEventListener('change', function (evt) {
        if (this.value !== '') self.hidePlaceHolder();
      });
    });
    this.noop = function() {}.bind(this);
    this.oneTimeValueSet = function() {
      self.oneTimeValueSet = self.noop;
      self.hidePlaceHolder();
    }.bind(this)
    this.returnBaseContainerClass = function() {
      let str = `vp-input-container`;
      if (self.opts.textarea) str += ` textarea`;
      return str;
    }.bind(this)
    this.showHideClearButton = function(e) {
      if(e.which === 9 || e.which === 16) return false;
      const closeElem = self.root.querySelector('.v-icon-close-circle');
      const inputElem = (self.opts.textarea) ? self.root.querySelector('textarea') : self.root.querySelector('input');
      if (closeElem && inputElem && inputElem.value === '') {
        closeElem.style.display = 'none';
      } else if (closeElem) {
        closeElem.style.display = 'block';
      }
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
      str = `padding: 0; ${str}`
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
      const inputElem = (self.opts.textarea) ? self.root.querySelector('textarea') : self.root.querySelector('input');
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
      } else if (self.root.querySelector('textarea')) {
        self.root.querySelector('textarea').focus();
      }
    }.bind(this)
});
