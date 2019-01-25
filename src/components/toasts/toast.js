class Toast {

  constructor() {}

  createContainer() {
    let div = document.createElement('div');
    div.id = 'vp-toast-container';
    return div;
  }

  createToast(options) {
    let div = document.createElement('div');
    let iconDiv = document.createElement('div');
    let icon = document.createElement('i');
    let messageDiv = document.createElement('div');
    let header = document.createElement('div');
    let message = document.createElement('p');

    icon.className = 'icon-check-circle';

    if (options.type === 'info') {
      icon.className = 'icon-info-circle info';
    } else if (options.type === 'error') {
      icon.className = 'icon-info-circle error';
    }

    iconDiv.className = icon;
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

    
    return div;
  }

  initContainer() {
    if (document.querySelector('#vp-toast-container') === null) {
      document.body.appendChild(this.createContainer());
    }
  }
  
  show(options={
    type: 'success',
    header: null,
    message: null
  }) {
    this.initContainer();
    document.querySelector('#vp-toast-container').appendChild(this.createToast(options));
    document.querySelector('#vp-toast-container').style.display = 'block';
  }

}

// This component is a singleton.
const instance = new Toast();
Object.freeze(instance);

// Export
export default instance;