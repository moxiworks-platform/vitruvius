<vp-input>
    <label if="{ this.opts.label }">{ this.opts.label }</label>
    <div class="vp-input-container">
      <i class="{ this.opts.iconleft }" if="{ this.opts.iconleft }"></i>
      <i class="icon-close-circle" if="{ this.opts.iconclose }" onclick="{ clearField }"></i>
      <input
        style="{returnClass(this.opts.iconleft, this.opts.iconclose)}"
        type="{ this.opts.type }"
        placeholder="{ this.opts.placeholder }"
        name="{ this.opts.name }"
        value="{ this.opts.value }"
        onkeyup="{ showHideClearButton }"
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
  </script>
</vp-input>
