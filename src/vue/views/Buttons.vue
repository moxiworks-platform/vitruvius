<template>
  <section id="buttons">
    <h1 class="mb-30">Buttons</h1>

    <pre class="prettyprint linenums lang-html">
    &lt;button class="btn btn-flat"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Flat&lt;/button&gt;
    &lt;button class="btn btn-default"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Default&lt;/button&gt;
    &lt;button class="btn btn-primary"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Primary&lt;/button&gt;
    &lt;button class="btn btn-destructive"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Destructive&lt;/button&gt;</pre>

    <div><strong>Basic Button Styles</strong></div>
    <div class="my-10">
      <button class="btn btn-flat">Flat</button>
      <button class="btn btn-default">Default</button>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-destructive">Destructive</button>
    </div>

    <div><strong>Buttons with Icons</strong></div>
    <div class="my-10">
      <button class="btn btn-flat"><i class="icon-location-pin-filled"></i> Flat</button>
      <button class="btn btn-default"><i class="icon-location-pin-filled"></i> Default</button>
      <button class="btn btn-primary"><i class="icon-location-pin-filled"></i> Primary</button>
      <button class="btn btn-destructive"><i class="icon-location-pin-filled"></i> Destructive</button>
    </div>

    <div><strong>Dense Button Varient (smaller)</strong></div>
    <div class="my-10">
      <button class="btn btn-flat btn-dense">Flat</button>
      <button class="btn btn-default btn-dense">Default</button>
      <button class="btn btn-primary btn-dense">Primary</button>
      <button class="btn btn-destructive btn-dense">Destructive</button>
    </div>

    <div><strong>Buttons with Icons Dense (smaller)</strong></div>
    <div class="my-10">
      <button class="btn btn-flat btn-dense"><i class="icon-location-pin-filled"></i> Flat</button>
      <button class="btn btn-default btn-dense"><i class="icon-location-pin-filled"></i> Default</button>
      <button class="btn btn-primary btn-dense"><i class="icon-location-pin-filled"></i> Primary</button>
      <button class="btn btn-destructive btn-dense"><i class="icon-location-pin-filled"></i> Destructive</button>
    </div>

    <v-button data-title="woot"></v-button>
    
  </section>
</template>

<script>

  import Btn from '../../components/button/button-test'

  export default {
    name: 'buttons',
    data() {
      return {}
    },
    mounted() {
      Btn.init()
    }
  }
</script>
