import { props, withComponent } from 'skatejs';

class Button extends withComponent() {

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
    let icn = (icon) ? `<i class="${icon}"></i> ` : ''
    return `
      <button class="btn ${this.returnClass(type)}" onclick="${onClick}">
        ${icn}
        ${this.innerHTML}
      </button>
    `;
  }
}

customElements.define('vp-button', Button);