// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class VpInput extends LitElement {

  static get properties() {
    return { 
      name: { type: String },
      label: { type: String },
      value: { type: String },
      type: { type: String },
      style: { type: String },
      id: { type: String },
      pattern: { type: String },
      textarea: { type: Boolean },
      autocomplete: { type: Boolean },
      iconleft: { type: Boolean },
      iconRight: { type: Boolean }
    };
  }

  constructor() {
    super();
  }

  // Remove Shadow Dom
  createRenderRoot() {
    return this;
  }

  returnBaseContainerClass() {
    let str = `vp-input-container`;
    if (this.textarea) str += ` textarea`;
    return str;
  }

  returnClass() {
    let str = '';
    if (this.iconleft) {
      str += 'padding-left: 30px; ';
    }
    if (this.iconClose) {
      str += 'padding-right: 30px; '
    }
    if (this.color) {
      str += `color: ${this.color}; `
    }
    str = `padding: 0; ${str}`
    return str;
  }

  checkLabelStyles() {
    let str = '';
    if (this.iconleft) {
      str += `left: 40px; `
    }
    if (this.background) {
      str += `background: ${this.background}; `;
    }
    if (this.color) {
      str += `color: ${this.color}; `;
    }
    if (this.value && this.value !== '') {
      setTimeout(function() {
        this.oneTimeValueSet();
      });
    }
    return str;
  }

  showHideClearButton(e) {
    console.log(e);
  }

  hidePlaceHolder(e) {
    const el = e.target;
    const label = el.previousElementSibling;
    const container = label.parentNode;
    console.log(container)
    label.classList.add('active');
    container.classList.add('dark');
  }

  showPlaceHolder(e) {
    if (e.target.value !== '') return false;
    const el = e.target;
    const label = el.previousElementSibling;
    const container = label.parentNode;
    console.log(container)
    label.classList.remove('active');
    container.classList.remove('dark');
  }

  focusOnInput(e) {
    const container = e.target.parentNode;
    container.querySelector('input').focus({
      target: e.target
    });
  }

  render() {

    this.pattern = (this.pattern) ? this.pattern : '';

    return html`
    ${this.textarea ?
      html`
        <p>Render some HTML if myBool is true</p>
      ` 
    :
      html`
      <div class="${ this.returnBaseContainerClass() }">
        <label style="${ this.checkLabelStyles() }" @click="${ this.focusOnInput }">${ this.label }</label>
        <input
          autocomplete="off"
          id="${ this.id }"
          style="${ this.returnClass() }"
          type="${ this.type }"
          name="${ this.name }"
          value="${ this.value }"
          pattern="${ this.pattern }"
          @keyup="${ this.showHideClearButton }"
          @focus="${ this.hidePlaceHolder }"
          @blur="${ this.showPlaceHolder }"
        >
      </div>
      `
    }
    `;
  }
}
// Register the new element with the browser.
customElements.define('vp-input', VpInput);