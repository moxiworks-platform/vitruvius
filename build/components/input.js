riot.tag2('vp-input', '<div class="vp-input-container"> <i data-icontype="left" class="{this.opts.iconleft}" if="{this.opts.iconleft}"></i> <i class="icon-close-circle" if="{this.opts.iconclose}" onclick="{clearField}"></i> <label>{this.opts.placeholder}</label> <input autocomplete="off" riot-style="{returnClass(this.opts.iconleft, this.opts.iconclose)}" type="{this.opts.type}" placeholder="{this.opts.placeholder}" name="{this.opts.name}" riot-value="{this.opts.value}" onkeyup="{showHideClearButton}" onfocus="{hidePlaceHolder}" onblur="{showPlaceHolder}"> </div>', '', '', function(opts) {
    const self = this;
    this.showHideClearButton = function() {
      const closeElem = self.root.querySelector('.icon-close-circle');
      const inputElem = self.root.querySelector('input');
      if (closeElem && inputElem && inputElem.value === '') {
        closeElem.style.display = 'none';
      } else if (closeElem) {
        closeElem.style.display = 'block';
      }
      self.hideLabel(inputElem);
    }.bind(this)
    this.returnClass = function(leftIcon, iconClose) {
      let str = '';
      if (leftIcon) {
        str += 'padding-left: 40px; ';
      }
      if (iconClose) {
        str += 'padding-right: 40px;'
      }
      return str;
    }.bind(this)
    this.clearField = function() {
      self.root.querySelector('input').value = '';
      self.showHideClearButton();
    }.bind(this)
    this.hidePlaceHolder = function() {
      self.root.querySelector('input').placeholder = '';
      self.root.querySelector('label').style.display = 'block';
      self.root.querySelector('.vp-input-container').classList.add('dark');
      if (self.opts.iconleft) {
        self.root.querySelector('label').style.left = '50px';
      }
    }.bind(this)
    this.showPlaceHolder = function() {
      const inputElem = self.root.querySelector('input');
      inputElem.placeholder = self.opts.placeholder;
      self.hideLabel(inputElem);
    }.bind(this)
    this.hideLabel = function(el) {
      if (el.value === '') {
        self.root.querySelector('label').style.display = 'none';
        self.root.querySelector('.vp-input-container').classList.remove('dark');
      }
    }.bind(this)
});
