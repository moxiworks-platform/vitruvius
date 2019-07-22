// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

// Extend the LitElement base class
class VpCard extends LitElement {

  static get properties() {
    return {
      type: { type: String },
      headerimage: { type: String },
      headerimageheight: { type: String },
      imageheadertext: { type: String }
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

  returnHeaderText() {
    if (this.imageheadertext) {
      return unsafeHTML(this.imageheadertext);
    }
  }

  returnHeaderImage() {
    if (this.headerimage) {
      let height = (this.headerimageheight) ? this.headerimageheight : 'inherit';

      return html `
        <div class="v-card-header-image relative" style="background-image: url(${ this.headerimage }); background-size: cover; height: ${height}">
          <div class="v-card-header-image-gradient">
            ${ this.returnHeaderText() }
          </div>
        </div>
      `
    }
  }

  returnInnerHTML() {
    return unsafeHTML(this.innerHTML);
  }

  render() {
    return html`
    <div class="v-card ${ this.returnClass(this.type) }">
      ${ this.returnHeaderImage() }
      <div class="v-container-thin">
        ${ this.returnInnerHTML() }
      </div>
    </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('vp-card', VpCard);
