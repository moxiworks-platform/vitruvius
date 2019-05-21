// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class VpButton extends LitElement {

  constructor() {
    super();
  }

  static get properties() {
    return { 
      type: { type: String }
    };
  }

  // No Shadowdom
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <button class="${this.type}">I'm a Button!</button>
    `;
  }
}
// Register the new element with the browser.
customElements.define('vp-button', VpButton);
