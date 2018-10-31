// @jsx h

import { props, withComponent } from 'skatejs';
import withPreact from '@skatejs/renderer-preact';
import { h } from 'preact';

class Card extends withComponent(withPreact()) {
  
  get renderRoot() {
    return this;
  }

  static get props() {
    return {
      name: props.string,
      image: props.string,
      reveal: props.string
    };
  }

  showReveal() {
    console.log('Show Reveal')
  }

  render({ image, reveal }) {

    return(
      <div class="v-card">
        { image &&
          <div class="v-card-image"><img src={ image } /></div>
        }
        { reveal &&
          <i class="icon-more--vertical text-xl float-right cursor-pointer" onClick={ e => this.showReveal() }></i>
        }
        { this.innerHTML }
      </div>
    )
  }
}

customElements.define('vp-card', Card);