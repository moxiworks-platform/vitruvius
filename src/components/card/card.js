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
      image: props.string,
      reveal: props.string
    };
  }

  showReveal() {
    console.log('Show Reveal')
  }
  
  render({ image, reveal }) {
    
    let img = (image) ? html`<div class="v-card-image"><img src="${image}"></div>` : ''
    let rev = (reveal) ? html`<i class="icon-more--vertical text-xl float-right cursor-pointer" onclick="this.showReveal()"></i>` : ''

    return html`
      <div class="v-card" on-click=${(e) => { this._showReveal(); }}>
        ${img}
        ${rev}
        ${this.innerHTML}
      </div>
    `;
  }
}

customElements.define('vp-card', Card);