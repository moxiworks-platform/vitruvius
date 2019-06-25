// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class VpRadio extends LitElement {

  static get properties() {
    return {
      name: { type: String },
      checked: { type: Boolean },
      value: { type: String },
      disabled: { type: Boolean },
      label: { type: String },
      type: { type: String }
    };
  }

  constructor() {
    super();
  }

  // Remove Shadow Dom
  createRenderRoot() {
    return this;
  }

  returnStyles(initialClass, type) {
    if (!type)  return initialClass;
    let tmp = type.split(',')
    let str = '';
    tmp.forEach((o) => {
      str += `${o} `
    });
    return `${initialClass} ${str.trim()}`
  }

  preFlight() {
    this.disabled = (this.type && this.type.indexOf('disabled') > -1) ? true : false;
  }

  render() {
    this.preFlight();
    return html`
    <label class="${ this.returnStyles('element-container radio', this.type) }">${ this.label }
        <input
          type="radio"
          name="${ this.name }"
          value="${ this.value }"
          .checked="${ this.checked }"
          .disabled="${ this.disabled }"
        >
        <span class="${ this.returnStyles('checkmark radio', this.type) }"></span>
      </label>
    `;
  }
}
// Register the new element with the browser.
customElements.define('vp-radio', VpRadio);
