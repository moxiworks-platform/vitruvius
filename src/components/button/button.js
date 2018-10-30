import { props, withComponent } from 'skatejs';

class Button extends withComponent() {

  get renderRoot() {
    return this;
  }

  static get props() {
    return {
      text: props.string,
      klass: props.string,
      icon: props.string,
      onClick: props.string
    };
  }
  
  render({ text, klass, icon, onClick }) {
    let icn = (icon) ? `<i class="${icon}"></i> ` : ''
    return `
      <button class="${klass}" onclick="${onClick}">
        ${icn}
        ${text}
      </button>
    `;
  }
}

customElements.define('vp-button', Button);