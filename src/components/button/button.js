export default class Button {
  set title(title) {
    this.titleValue = title;
    this.render();
  }

  get title() {
    return this.titleValue;
  }

  init(container) {
    console.log('woot?')
    this.container = container;
    this.titleValue = this.container.dataset.title;
    this.render();
  }

  render() {
    this.container.innerHTML = Button.markup(this);
  }

  static markup({title}) {
    return `
      <h1>${title}</h1>
    `;
  }

  constructor(container) {
    // The constructor should only contain the boiler plate code for finding or creating the reference.
    if (typeof container.dataset.ref === 'undefined') {
      this.ref = Math.random();
      Button.refs[this.ref] = this;
      container.dataset.ref = this.ref;
      this.init(container);
    } else {
      // If this element has already been instantiated, use the existing reference.
      return Button.refs[container.dataset.ref];
    }
  }
}

Button.refs = {};

// new Button(document.getElementById('example-component'))
