riot.tag2('vp-toast', '', '', '', function(opts) {

    if (document.querySelector('#vp-toast-container') === null) {
      window.VpToast = {
        toastContainer: `<div id="vp-toast-container"></div>`,
        toastTemplate: `<div class="vp-toast">
          <div class="vp-toast-icon">
            <i class="icon-check-circle"></i>
          </div>
          <div class="vp-toast-message">
            <strong>Toast Title</strong>
            <p>This is some more text which may or may not be in the message.</p>
          </div>
        </div>`,
        initContainer: function() {
          document.body.innerHTML += this.toastContainer;
        },
        showToast: function(type, header, message) {
          document.querySelector('#vp-toast-container').innerHTML += this.toastTemplate;
        },
      }

      VpToast.initContainer();
    }
});