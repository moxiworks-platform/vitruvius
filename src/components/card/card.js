import { props, withComponent } from 'skatejs';
import withLitHtml from '@skatejs/renderer-lit-html';
import { html } from 'lit-html';

class Card extends withComponent(withLitHtml()) {

  get renderRoot() {
    return this;
  }

  static get props() {
    return {
      name: props.string
    };
  }
  
  render({ name }) {
    return html`
      <div class="ax-w-sm rounded overflow-hidden shadow-lg p-16">
        ${this.innerHTML}
      </div>
    `;
  }
}

customElements.define('vp-card', Card);