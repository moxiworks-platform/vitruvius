export default {
  set title(title) {
    this.titleValue = title;
    this.render();
  },

  get title() {
    return this.titleValue;
  },

  print(container) {
    this.container = container;
    this.titleValue = this.container.dataset.title;
    this.render();
  },

  render() {
    this.container.innerHTML = this.markup(this);
  },

  markup({title}) {
    return `
      <h1>${title}</h1>
    `;
  },

  init() {
    this.refs = {}
    let elems = [...document.getElementsByTagName('v-button')];
    if (elems.length > 0) {
      elems.forEach((o, i) => {
        // The constructor should only contain the boiler plate code for finding or creating the reference.
        if (typeof o.dataset.ref === 'undefined') {
          this.ref = Math.random();
          this.refs[this.ref] = this;
          o.dataset.ref = this.ref;
          this.print(o);
        } else {
          // If this element has already been instantiated, use the existing reference.
          return this.refs[o.dataset.ref];
        }
      })
    }
  }
}

