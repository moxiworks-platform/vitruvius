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
      imageheadertext: { type: String },
      subsection: { type: String },
      badge: { type: Object }
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

  returnSubSection() {
    if (this.subsection) {
      return html `
        <div class="v-card-subsection">
          ${ unsafeHTML(this.subsection) }
        </div>
      `;
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

  returnBadge() {
    if (this.badge) {
      return html `
        <div class="absolute z-20" style="top: 8px; left: 8px;">
          <div class="badge ${ this.badge.backgroundClass } text-${this.badge.color}">
            ${ this.badge.label }
          </div>
        </div>
      `
    }
  }

  render() {

    return html`
    <div class="v-card ${ this.returnClass(this.type) }">
      ${ this.returnBadge() }
      ${ this.returnHeaderImage() }
      <div class="v-container-thin">
        ${ this.returnInnerHTML() }
      </div>
      ${ this.returnSubSection() }
    </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('vp-card', VpCard);
