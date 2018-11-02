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

  showReveal(e) {
    e.target.parentNode.querySelector('.v-reveal').style.display = 'block'
  }

  hideReveal(e) {
    e.target.parentNode.parentNode.style.display = 'none'
  }

  render({ image, reveal }) {
    return html`
      <div class="v-card">
        ${ (reveal) ? html`
          <div class="v-reveal">
            <div class="v-close-reveal"><i class="icon-close" @click="${(e) => this.hideReveal(e)}"></i></div>
            <div class="v-reveal-content absolute-center">
              ${this.reveal}
            </div>
          </div>` : '' 
        }
        ${ image ? html`<div class="v-card-image"><img src="${ image }" /></div>` : '' }
        ${ reveal ? html`<i class="icon-more--vertical text-xl float-right cursor-pointer" @click="${(e) => this.showReveal(e)}"></i>` : '' }
        ${ this.innerHTML }
      </div>
    `;
  }
}

customElements.define('vp-card', Card);