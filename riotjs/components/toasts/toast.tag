<vp-toast>
  <div class="vp-toast" onclick={ hideToast }>
    <div class="vp-toast-icon">
      <i class="icon-check-circle"></i>
    </div>
    <div class="vp-toast-message">
      <strong>Toast Title</strong>
      <p>This is some more text which may or may not be in the message.</p>
    </div>
  </div>
  <script>
    hideToast(e) {
      let el = (e.target.offsetParent.classList.contains('vp-toast')) ? e.target.offsetParent : e.target;
      el.classList.remove('show');
    }
  </script>
</vp-toast>