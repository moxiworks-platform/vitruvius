class Toast {

  constructor() {}

  createContainer(options) {
    const self = this;
    let div = document.createElement('div');
    div.id = 'vp-toast-container';
    if (options.centered) {
      let wrapper = document.createElement('div');
      wrapper.className = 'vp-toast-wrapper';
      div.className = 'centered';
      wrapper.appendChild(div);
      wrapper.addEventListener('click', function() {
        if (this.parentNode) this.parentNode.removeChild(this);
        self.checkCenteredContainer();
      });
      return wrapper;
    } else {
      return div;
    }
  }

  createToast(options) {
    const self = this;
    let div = document.createElement('div');
    let iconDiv = document.createElement('div');
    let icon = document.createElement('i');
    let messageDiv = document.createElement('div');
    let header = document.createElement('div');
    let message = document.createElement('p');

    icon.className = 'v-icon-check-circle';

    if (options.type === 'info') {
      icon.className = 'v-icon-info-circle info';
    } else if (options.type === 'error') {
      icon.className = 'v-icon-info-circle error';
    }

    // iconDiv.className = icon;
    messageDiv.className = 'vp-toast-message';
    header.className = 'font-bold mb-5';

    div.className = 'vp-toast show';

    header.innerHTML = options.header || '';
    message.innerHTML = options.message || '';

    iconDiv.appendChild(icon);
    if (options.header) messageDiv.appendChild(header);
    messageDiv.appendChild(message);
    div.appendChild(iconDiv);
    div.appendChild(messageDiv);

    // Remove toast with click.
    div.addEventListener('click', function() {
      this.parentNode.removeChild(this);
      self.checkContainer();
    });

    if (options.removeIn && !isNaN(options.removeIn)) {
      self.elemTimeout = setTimeout(function() {
        if (div.parentNode) div.parentNode.removeChild(div);
        self.checkCenteredContainer();
      }, options.removeIn);
    }


    return div;
  }

  initContainer(options) {
    if (document.querySelector('#vp-toast-container') === null) {
      document.body.appendChild(this.createContainer(options));
    }
  }

  show(options={
    type: 'success',
    header: null,
    message: null,
    removeIn: null
  }) {
    this.initContainer(options);
    document.querySelector('#vp-toast-container').appendChild(this.createToast(options));
    document.querySelector('#vp-toast-container').style.display = 'block';
  }

  checkContainer() {
    if (!document.querySelectorAll('.vp-toast').length) {
      const container = document.querySelector('#vp-toast-container');
      container.parentNode.removeChild(container)
    }
    this.checkCenteredContainer();
  }

  checkCenteredContainer() {
    if (document.querySelectorAll('.vp-toast-wrapper').length) {
      const wrapper = document.querySelector('.vp-toast-wrapper');
      wrapper.parentNode.removeChild(wrapper);
    }

    if (this.elemTimeout) {
      clearTimeout(this.elemTimeout);
    }
  }

}

export default Toast;
