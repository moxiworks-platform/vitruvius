import { props, withComponent } from 'skatejs';

class Card extends withComponent() {

  get renderRoot() {
    return this;
  }

  static get props() {
    return {
      name: props.string
    };
  }
  
  render({ name }) {
    return `
      <div class="ax-w-sm rounded overflow-hidden shadow-lg p-16">
        ${this.innerHTML}
      </div>
    `;
  }
}

customElements.define('vp-card', Card);