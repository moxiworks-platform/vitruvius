// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class VpButton extends LitElement {

  // No Shadowdom
  createRenderRoot() {
    this.tea = 'foo';
    return this;
  }

  render() {
    return html`
      <!-- template content -->
      <p>A paragraph</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define('vp-button', VpButton);
