<template>
  <section id="buttons">
    <h1 class="mb-30">Buttons</h1>

    <pre class="prettyprint linenums lang-html">
    &lt;button class="btn btn-flat"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Flat&lt;/button&gt;
    &lt;button class="btn btn-default"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Default&lt;/button&gt;
    &lt;button class="btn btn-primary"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Primary&lt;/button&gt;
    &lt;button class="btn btn-destructive"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Destructive&lt;/button&gt;</pre>

    <h2>Basic Button Styles</h2>
    <div class="my-10">
      <vp-button type="flat">Flat</vp-button>
      <vp-button type="default">Default</vp-button>
      <vp-button type="primary">Primary</vp-button>
      <vp-button type="destructive">Destructive</vp-button>
    </div>

    <h2>Buttons with Icons</h2>
    <div class="my-10">
      <vp-button type="flat" icon="icon-location-pin-filled">Flat</vp-button>
      <vp-button type="default" icon="icon-location-pin-filled">Default</vp-button>
      <vp-button type="primary" icon="icon-location-pin-filled">Primary</vp-button>
      <vp-button type="destructive" icon="icon-location-pin-filled">Destructive</vp-button>
    </div>

    <h2>Dense Button Varient (smaller)</h2>
    <div class="my-10">
      <vp-button type="flat,dense">flat</vp-button>
      <vp-button type="default,dense">Default</vp-button>
      <vp-button type="primary,dense">Primary</vp-button>
      <vp-button type="destructive,dense">Destructive</vp-button>
    </div>

    <h2>Buttons with Icons Dense (smaller)</h2>
    <div class="my-10">
      <vp-button type="flat,dense" icon="icon-location-pin-filled">flat</vp-button>
      <vp-button type="default,dense" icon="icon-location-pin-filled">Default</vp-button>
      <vp-button type="primary,dense" icon="icon-location-pin-filled">Primary</vp-button>
      <vp-button type="destructive,dense" icon="icon-location-pin-filled">Destructive</vp-button>
    </div>

    <br /><br />

    <vp-button title="Testing Link" type="blue" href="https://moxiworks-platform.github.io/vitruvius" target="_blank" />

  </section>
</template>

<script>
import '../components/button/button';

export default {
  name: 'buttons',
  data() {
    return {};
  },
};
</script>
