// @jsx h

import { props, withComponent } from 'skatejs';
import withPreact from '@skatejs/renderer-preact';
import { h } from 'preact';

class Button extends withComponent(withPreact()) {

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

    return(
      <button className={ 'btn ' + this.returnClass(type) } onClick={onClick}>
        { icon &&
          <i class={icon}></i>
        }
        { this.innerHTML }
      </button>
    )
  }
}

customElements.define('vp-button', Button);