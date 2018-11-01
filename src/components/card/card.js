import { props, withComponent } from 'skatejs';
import withLitHtml from '@skatejs/renderer-lit-html';
import { html } from 'lit-html';

class Card extends withComponent(withLitHtml()) {

  get renderRoot() {
    return this;
  }

  static get props() {
    return {
      image: props.string,
      reveal: props.string
    };
  }

  showReveal() {
    console.log('Show Reveal')
  }

  render({ image, reveal }) {
    return html`
      <div class="v-card">
        ${ image ? html`<div class="v-card-image"><img src="${ image }" /></div>` : '' }
        ${ reveal ? html`<i class="icon-more--vertical text-xl float-right cursor-pointer" @click="${() => this.showReveal()}"></i>` : '' }
        ${ this.innerHTML }
      </div>
    `;
  }
}

customElements.define('vp-card', Card);