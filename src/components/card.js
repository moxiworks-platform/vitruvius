// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class VpCard extends LitElement {

  static get properties() {
    return {
      type: { type: String },
      image: { type: String },
      icon: { type: String }
    };
  }

  constructor() {
    super();
  }

  // Remove Shadow Dom
  createRenderRoot() {
    return this;
  }

  returnClass(type) {
    if (!type)  return false;
    let tmp = type.split(',')
    let str = ''
    tmp.forEach((o) => {
      str += `${o} `
    });
    return `${str.trim()}`
  }

  returnIcon() {
    console.log(this.icon !== undefined)
    if (this.icon) {
      return html `<i class=${ this.icon }></i>`;
    }
  }

  returnRoundedImage() {
    if (this.image) {
      return `<div class="rounded-image" style="background-image: url(${ this.image })"></div>`;
    }
  }

  render() {
    return html`
    <div class="v-card ${ this.returnClass(this.type) }">
      ${ this.returnIcon() }
      ${ this.returnRoundedImage() }
      ${ this.innerText }
    </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('vp-card', VpCard);
