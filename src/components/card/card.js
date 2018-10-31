import { props, withComponent } from 'skatejs';
import withLitHtml from '@skatejs/renderer-lit-html';
import { html } from 'lit-html';

class Card extends withComponent(withLitHtml()) {

  get renderRoot() {
    return this;
  }

  static get props() {
    return {
      name: props.string,
      image: props.string
    };
  }
  
  render({ name, image }) {
    
    let img = (image) ? html`<div class="v-card-image"><img src="${image}"></div>` : ''

    return html`
      <div class="v-card">
        ${img}
        ${this.innerHTML}
      </div>
    `;
  }
}

customElements.define('vp-card', Card);