// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

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
      var frag = document.createRange().createContextualFragment(`${ this.imageheadertext }`);
      return frag;
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
    // this.innerHTML
    var frag = document.createRange().createContextualFragment(`${ this.innerHTML }`);
    return frag;
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
