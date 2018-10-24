import { props, withComponent } from 'skatejs';

class Button extends withComponent() {

  get renderRoot() {
    return this;
  }

  static get props() {
    return {
      name: props.string,
      klass: props.string,
      icon: props.string
    };
  }
  
  render({ name, klass, icon }) {
    let icn = (icon) ? `<i class="${icon}"></i> ` : ''
    return `
      <button class="${klass}">
        ${icn}
        ${name}
      </button>
    `;
  }
}

customElements.define('vp-button', Button);