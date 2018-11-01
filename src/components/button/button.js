import { props, withComponent } from 'skatejs';
import withLitHtml from '@skatejs/renderer-lit-html';
import { html } from 'lit-html';

class Button extends withComponent(withLitHtml()) {

  get renderRoot() {
    return this;
  }

  static get props() {
    return {
      type: props.string,
      icon: props.string,
      onClick: props.string
    };
  }

  returnClass(type) {

    let tmp = type.split(',')
    let str = ''
    tmp.forEach((o) => {
      str += `btn-${o} `
    })
    return str
  }

  render({ type, icon, onClick }) {
    return html`
      <button class="btn ${this.returnClass(type)}" @click="${onClick}">
        ${ icon ? html`<i class="${icon}"></i>` : '' }
        ${this.innerHTML}
      </button>
    `;
  }
}

customElements.define('vp-button', Button);