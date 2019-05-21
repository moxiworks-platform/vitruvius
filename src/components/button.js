// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class VpButton extends LitElement {

  static get properties() {
    return { 
      type: { type: String },
      id: { type: String },
      title: { type: String },
      href: { type: String },
      target: { type: String }
    };
  }

  constructor() {
    super();
    this.type = this.type || 'flat';
  }

  // Remove Shadow Dom
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

  returnProperTag() {
    if (this.href) {
      return html `<a href="${this.href}" target="${this.target || ''}" class="${this.returnTypes()}" id="${this.id || ''}">${this.returnInnerText()}</a>`;
    } else {
      return html `<button class="${this.returnTypes()}" id="${this.id || ''}">${this.returnInnerText()}</button>`;
    }
  }

  render() {
    return html`
      ${this.returnProperTag()}
    `;
  }
}
// Register the new element with the browser.
customElements.define('vp-button', VpButton);
