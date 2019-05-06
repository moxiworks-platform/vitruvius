<vp-input>
  <div class="{ returnBaseContainerClass() }">
    <i data-icontype="left" class="{ this.opts.iconleft }" if="{ this.opts.iconleft }"></i>
    <i class="v-icon-close-circle" if="{ this.opts.iconclose }" onclick="{ clearField }"></i>
    <label style="{checkLabelStyles()}" onclick="{ focusOnInput }">{ this.opts.label }</label>
    <input
      if="{ !this.opts.textarea }"
      autocomplete="off"
      id="{ this.opts.id }"
      style="{ returnClass() }"
      type="{ this.opts.type }"
      name="{ this.opts.name }"
      value="{ this.opts.value }"
      pattern="{ this.opts.pattern }"
      onkeyup="{ showHideClearButton }"
      onfocus="{ hidePlaceHolder }"
      onblur="{ showPlaceHolder }"
    >
    <textarea
      if="{ this.opts.textarea }"
      autocomplete="off"
      id="{ this.opts.id }"
      rows="{ this.opts.rows }"
      style="{ returnClass() }"
      type="{ this.opts.type }"
      name="{ this.opts.name }"
      pattern="{ this.opts.pattern }"
      onkeyup="{ showHideClearButton }"
      onfocus="{ hidePlaceHolder }"
      onblur="{ showPlaceHolder }"
    >{ this.opts.value }</textarea>
  </div>

  <script>
    const self = this;
    noop() {};
    oneTimeValueSet() {
      console.log(self.opts.pattern)
      self.oneTimeValueSet = self.noop;
      self.hidePlaceHolder();
    }
    returnBaseContainerClass() {
      let str = `vp-input-container`;
      if (self.opts.textarea) str += ` textarea`;
      return str;
    }
    showHideClearButton(e) {
      if(e.which === 9 || e.which === 16) return false;
      const closeElem = self.root.querySelector('.v-icon-close-circle');
      const inputElem = (self.opts.textarea) ? self.root.querySelector('textarea') : self.root.querySelector('input');
      if (closeElem && inputElem && inputElem.value === '') {
        closeElem.style.display = 'none';
      } else if (closeElem) {
        closeElem.style.display = 'block';
      }
    }
    returnClass() {
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
      const inputElem = (self.opts.textarea) ? self.root.querySelector('textarea') : self.root.querySelector('input');
      self.hideLabel(inputElem);
    }
    hideLabel(el) {
      if (el.value === '') {
        self.root.querySelector('label').classList.remove('active');
        self.root.querySelector('.vp-input-container').classList.remove('dark');
      }
    }
    checkLabelStyles() {
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
    }
    focusOnInput() {
      if (self.root.querySelector('input')) {
        self.root.querySelector('input').focus();
      } else if (self.root.querySelector('textarea')) {
        self.root.querySelector('textarea').focus();
      }
    }
  </script>
</vp-input>
