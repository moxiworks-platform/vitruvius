// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class VpButton extends LitElement {

  constructor() {
    super();
  }

  static get properties() {
    return { 
      type: { type: String },
      title: { stype: String }
    };
  }

  // No Shadowdom
  createRenderRoot() {
    return this;
  }

  returnTypes() {
    let tmp = this.type.split(',')
    let str = ''
    tmp.forEach((o) => {
      str += `btn-${o} `
    })
    return `btn ${str}`
  }

  returnInnerText() {
    return (this.title) ? this.title : this.innerText;
  }

  render() {
    return html`
      <button class="${this.returnTypes()}">${this.returnInnerText()}</button>
    `;
  }
}
// Register the new element with the browser.
customElements.define('vp-button', VpButton);
