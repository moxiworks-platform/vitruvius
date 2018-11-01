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
      <vp-button type="flat" onClick="alert('Hello World!')">Flat</vp-button>
      <vp-button type="default" onClick="alert('Hello World!')">Default</vp-button>
      <vp-button type="primary" onClick="alert('Hello World!')">Primary</vp-button>
      <vp-button type="destructive" onClick="alert('Hello World!')">Destructive</vp-button>
    </div>

    <div><strong>Buttons with Icons</strong></div>
    <div class="my-10">
      <vp-button type="flat" icon="icon-location-pin-filled" onClick="alert('Hello World!')">Flat</vp-button>
      <vp-button type="default" icon="icon-location-pin-filled" onClick="alert('Hello World!')">Default</vp-button>
      <vp-button type="primary" icon="icon-location-pin-filled" onClick="alert('Hello World!')">Primary</vp-button>
      <vp-button type="destructive" icon="icon-location-pin-filled" onClick="alert('Hello World!')">Destructive</vp-button>
    </div>

    <div><strong>Dense Button Varient (smaller)</strong></div>
    <div class="my-10">
      <vp-button type="flat,dense" onClick="alert('Hello World!')">flat</vp-button>
      <vp-button type="default,dense" onClick="alert('Hello World!')">Default</vp-button>
      <vp-button type="primary,dense" onClick="alert('Hello World!')">Default</vp-button>
      <vp-button type="destructive,dense" onClick="alert('Hello World!')">Default</vp-button>
    </div>

    <div><strong>Buttons with Icons Dense (smaller)</strong></div>
    <div class="my-10">
      <vp-button type="flat,dense" icon="icon-location-pin-filled" onClick="alert('Hello World!')">flat</vp-button>
      <vp-button type="default,dense" icon="icon-location-pin-filled" onClick="alert('Hello World!')">Default</vp-button>
      <vp-button type="primary,dense" icon="icon-location-pin-filled" onClick="alert('Hello World!')">Default</vp-button>
      <vp-button type="destructive,dense" icon="icon-location-pin-filled" onClick="alert('Hello World!')">Default</vp-button>
    </div>

  </section>
</template>

<script>
  import { button } from '../../components/button/button'
  import { test } from '../../components/test/test'

  export default {
    name: 'buttons',
    data() {
      return {}
    },
    mounted() {

    }
  }
</script>
