// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class VpCard extends LitElement {

  static get properties() {
    return {
      type: { type: String },
      image: { type: String },
      icon: { type: String },
      headerimage: { type: String },
      headerimageheight: { type: String },
      headertext: { type: String }
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
      return html `<div class="rounded-image" style="background-image: url(${ this.image })"></div>`;
    }
  }

  returnHeaderImage() {
    if (this.headerimage) {
      let height = (this.headerimageheight) ? this.headerimageheight : 'inherit';
      let txt = (this.headertext) ? this.headertext : '';
      return html `
        <div class="v-card-header-image relative" style="background-image: url(${ this.headerimage }); background-size: cover; height: ${height}">
          <div class="v-card-header-image-gradient">
            ${ txt }
          </div>
        </div>
      `
    }
  }

  render() {
    return html`
    <div class="v-card ${ this.returnClass(this.type) }">
      ${ this.returnHeaderImage() }
      <div class="v-container-thin flex flex-wrap">
        ${ this.returnIcon() }
        ${ this.returnRoundedImage() }
        ${ this.innerText }
      </div>
    </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('vp-card', VpCard);
