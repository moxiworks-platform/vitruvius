import { props, withComponent } from 'skatejs';
import withLitHtml from '@skatejs/renderer-lit-html';
import { html } from 'lit-html';

class WithLitHtml extends withComponent(withLitHtml()) {
  static get props() {
    return {
      name: props.string
    };
  }
  foo() {
    console.log('foo')
  }
  render({ name }) {
    return html`
      <div @click=${(e) => this.foo()}>Hello, ${name}!</div>
    `;
  }
}

customElements.define('vp-test', WithLitHtml);