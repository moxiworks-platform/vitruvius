<template>
  <section id="buttons">
    <h1 class="mb-30">Buttons</h1>

    <p>Buttons can be semantic or anchor tags with the proper class.</p>

    <h2>HTML Button Markup</h2>

    <pre class="prettyprint linenums lang-html">
    &lt;button class="btn btn-flat"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Flat&lt;/button&gt;
    &lt;button class="btn btn-default"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Default&lt;/button&gt;
    &lt;a class="btn btn-primary"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Primary&lt;/a&gt;
    &lt;a class="btn btn-destructive"&gt;&lt;i class="icon-location-pin-filled"&gt;&lt;/i&gt; Destructive&lt;/a&gt;</pre>

    <h3>Basic Button Styles</h3>
    <div class="my-10">
      <vp-button type="flat">Flat</vp-button>
      <vp-button type="default">Default</vp-button>
      <vp-button type="primary">Primary</vp-button>
      <vp-button type="destructive">Destructive</vp-button>
    </div>

    <h3>Buttons with Icons</h3>
    <div class="my-10">
      <vp-button type="flat" icon="icon-location-pin-filled">Flat</vp-button>
      <vp-button type="default" icon="icon-location-pin-filled">Default</vp-button>
      <vp-button type="primary" icon="icon-location-pin-filled">Primary</vp-button>
      <vp-button type="destructive" icon="icon-location-pin-filled">Destructive</vp-button>
    </div>

    <h3>Dense Button Varient (smaller)</h3>
    <div class="my-10">
      <vp-button type="flat,dense">flat</vp-button>
      <vp-button type="default,dense">Default</vp-button>
      <vp-button type="primary,dense">Primary</vp-button>
      <vp-button type="destructive,dense">Destructive</vp-button>
    </div>

    <h3>Buttons with Icons Dense (smaller)</h3>
    <div class="my-10">
      <vp-button type="flat,dense" icon="icon-location-pin-filled">flat</vp-button>
      <vp-button type="default,dense" icon="icon-location-pin-filled">Default</vp-button>
      <vp-button type="primary,dense" icon="icon-location-pin-filled">Primary</vp-button>
      <vp-button type="destructive,dense" icon="icon-location-pin-filled">Destructive</vp-button>
    </div>

    <h2>Component API</h2>

    <pre class="prettyprint linenums lang-html">
    &lt;vp-button type="flat,dense" icon="icon-location-pin-filled"&gt;flat&lt;/vp-button&gt;
    &lt;vp-button type="default,dense" icon="icon-location-pin-filled"&gt;Default&lt;/vp-button&gt;
    &lt;vp-button type="primary,dense" icon="icon-location-pin-filled"&gt;Primary&lt;/vp-button&gt;
    &lt;vp-button title="Destructive" type="blue" href="https://moxiworks-platform.github.io/vitruvius" target="_blank" /&gt;</pre>

    <h3>Properties</h3>

    <div class="v-flex">
      <div class="v-flex-item w-1/5 bg-cn-20">
        title
      </div>
      <div class="v-flex-item w-4/5 bg-cn-10">
        Optional. Replacement for the inner html of the tag.
      </div>
    </div>

    <div class="v-flex">
      <div class="v-flex-item w-1/5 bg-cn-20">
        type
      </div>
      <div class="v-flex-item w-4/5 bg-cn-10">
        Comma delimited list of applicable CSS styles. (primary,dense).
      </div>
    </div>

    <div class="v-flex">
      <div class="v-flex-item w-1/5 bg-cn-20">
        icon
      </div>
      <div class="v-flex-item w-4/5 bg-cn-10">
        Optional. Accepts a icon class to display an icon with the button title.
      </div>
    </div>

    <div class="v-flex">
      <div class="v-flex-item w-1/5 bg-cn-20">
        href
      </div>
      <div class="v-flex-item w-4/5 bg-cn-10">
        Optional. If passed the component will be an anchor tag linking to the value.
      </div>
    </div>

    <div class="v-flex">
      <div class="v-flex-item w-1/5 bg-cn-20">
        target
      </div>
      <div class="v-flex-item w-4/5 bg-cn-10">
        Optional. String for any acceptable HTML target. For use with href property.
      </div>
    </div>
    
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
