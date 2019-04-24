<vp-input>
  <div class="vp-input-container">
    <i data-icontype="left" class="{ this.opts.iconleft }" if="{ this.opts.iconleft }"></i>
    <i class="v-icon-close-circle" if="{ this.opts.iconclose }" onclick="{ clearField }"></i>
    <label style="{checkLeftLabelPlacement()}" onclick="{ focusOnInput }">{ this.opts.placeholder }</label>
    <input
      autocomplete="off"
      style="{returnClass(this.opts.iconleft, this.opts.iconclose)}"
      type="{ this.opts.type }"
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
    }
    returnClass(leftIcon, iconClose) {
      let str = '';
      if (leftIcon) {
        str += 'padding-left: 30px; ';
      }
      if (iconClose) {
        str += 'padding-right: 30px;'
      }
      return str;
    }
    clearField() {
      self.root.querySelector('input').value = '';
      self.showHideClearButton();
    }
    hidePlaceHolder() {
      self.root.querySelector('label').classList.add('active');
      self.root.querySelector('.vp-input-container').classList.add('dark');
    }
    showPlaceHolder() {
      const inputElem = self.root.querySelector('input');
      self.hideLabel(inputElem);
    }
    hideLabel(el) {
      if (el.value === '') {
        self.root.querySelector('label').classList.remove('active');
        self.root.querySelector('.vp-input-container').classList.remove('dark');
      }
    }
    checkLeftLabelPlacement() {
      if (self.opts.iconleft) {
        return `left: 40px;`
      }
    }
    focusOnInput() {
      if (self.root.querySelector('input')) {
        self.root.querySelector('input').focus();
      }
    }
  </script>
</vp-input>
