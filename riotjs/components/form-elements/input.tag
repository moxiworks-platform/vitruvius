<vp-input>
    <div class="vp-input-container border border-cn-30">
      <i data-icontype="left" class="{ this.opts.iconleft }" if="{ this.opts.iconleft }"></i>
      <i class="icon-close-circle" if="{ this.opts.iconclose }" onclick="{ clearField }"></i>
      <label>{ this.opts.placeholder }</label>
      <input
        autocomplete="off"
        style="{returnClass(this.opts.iconleft, this.opts.iconclose)}"
        type="{ this.opts.type }"
        placeholder="{ this.opts.placeholder }"
        name="{ this.opts.name }"
        value="{ this.opts.value }"
        onkeyup="{ showHideClearButton }"
        onfocus="{ hidePlaceHolder }"
        onblur="{ showPlaceHolder }"
      >
    </div>

  <script>
    const self = this;
    showHideClearButton() {
      const closeElem = self.root.querySelector('.icon-close-circle');
      const inputElem = self.root.querySelector('input');
      if (closeElem && inputElem && inputElem.value === '') {
        closeElem.style.display = 'none';
      } else if (closeElem) {
        closeElem.style.display = 'block';
      }
      self.hideLabel(inputElem);
    }
    returnClass(leftIcon, iconClose) {
      let str = '';
      if (leftIcon) {
        str += 'padding-left: 40px; ';
      }
      if (iconClose) {
        str += 'padding-right: 40px;'
      }
      return str;
    }
    clearField() {
      self.root.querySelector('input').value = '';
      self.showHideClearButton();
    }
    hidePlaceHolder() {
      self.root.querySelector('input').placeholder = '';
      self.root.querySelector('label').style.display = 'block';
      if (self.root.querySelectorAll('i')[0] && self.root.querySelectorAll('i')[0]['dataset'].icontype === 'left') {
        self.root.querySelector('label').style.left = '50px';
      }
    }
    showPlaceHolder() {
      const inputElem = self.root.querySelector('input');
      inputElem.placeholder = self.opts.placeholder;
      self.hideLabel(inputElem);
    }
    hideLabel(el) {
      if (el.value === '') {
        self.root.querySelector('label').style.display = 'none';
      }
    }
  </script>
</vp-input>
