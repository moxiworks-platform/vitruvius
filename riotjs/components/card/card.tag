<vp-card>
  <div class="v-card { returnClass(this.opts.type) }">
    <i class={ this.opts.icon } if={ this.opts.icon }></i>
    <div class="rounded-image" style="background-image: url({ this.opts.image })" if={ this.opts.image }></div>
    { this.root._innerHTML }
  </div>

  <script>
    import debounce from 'debounce';
    returnClass(type) {
      if (!type)  return false;
      let tmp = type.split(',')
      let str = ''
      tmp.forEach((o) => {
        str += `${o} `
      })
      return `${str.trim()}`
    }
  </script>
</vp-card>