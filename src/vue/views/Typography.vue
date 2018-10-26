<template>
  <section id="buttons">
    <h1 class="mb-30">Typography</h1>

    <p>
      Vitruvious uses the standard base font size of 16px which allows us to calculate font size in REM values from that point. If you're curious about conversions, you can look at this experiment here: <a href="https://daniellamb.com/experiments/px-to-rem-calc/" target="_blank">https://daniellamb.com/experiments/px-to-rem-calc/</a>
    </p>
    <p>
      You might be asking, why REM values? Because REM allows for accessibility where PX do not. Think of an older user who's bumped up their computers base font size. 12px is 12px - but .75rem will adjust accordingly to help that user read content at their desired level.
    </p>

    <h3 class="define">Headings</h3>

    <h1>h1. Headline Large - 2.5rem // 40px</h1>
    <h2>h2. Headline Medium - 1.5rem // 24px</h2>
    <h3>h3. Headline Regular - 1.125rem // 18px</h3>
    <h4>h4. Headline Small - 1rem // 16px</h4>
    <h5>h5. Headline "heading" - .875rem // 14px</h5>

    <h3 class="define">Plain Text and Class Examples</h3>

    <p>We have 9 font sizes accessible by class shown here</p>

    <pre class="prettyprint linenums lang-html">&lt;p class="text-xs"&gt;...&lt;/p&gt;</pre>
    <p class="text-xs">This is an example of our extra small font size of 12px or .75rem.</p>

    <pre class="prettyprint linenums lang-html">&lt;p class="text-sm"&gt;...&lt;/p&gt;</pre>
    <p class="text-sm">This is an example of our small font size of 14px or .875rem.</p>

    <pre class="prettyprint linenums lang-html">&lt;p&gt;...&lt;/p&gt;</pre>
    <p>This is an example of plain text of our base font size of 16px or 1rem.</p>

    <pre class="prettyprint linenums lang-html">&lt;p class="text-lg"&gt;...&lt;/p&gt;</pre>
    <p class="text-lg">This is an example of our large font size of 18px or 1.125rem.</p>

    <pre class="prettyprint linenums lang-html">&lt;p class="text-xl"&gt;...&lt;/p&gt;</pre>
    <p class="text-xl">This is an example of our XL font size of 20px or 1.25rem.</p>

    <pre class="prettyprint linenums lang-html">&lt;p class="text-2xl"&gt;...&lt;/p&gt;</pre>
    <p class="text-2xl">This is an example of our 2xl font size of 20px or 1.5rem.</p>

    <pre class="prettyprint linenums lang-html">&lt;p class="text-3xl"&gt;...&lt;/p&gt;</pre>
    <p class="text-3xl">This is an example of our 2xl font size of 30px or 1.875rem.</p>

    <pre class="prettyprint linenums lang-html">&lt;p class="text-4xl"&gt;...&lt;/p&gt;</pre>
    <p class="text-4xl">This is an example of our 4xl font size of 36px or 2.25rem.</p>

    <pre class="prettyprint linenums lang-html">&lt;p class="text-5xl"&gt;...&lt;/p&gt;</pre>
    <p class="text-5xl">This is an example of our 5xl font size of 40px or 2.5rem.</p>

  </section>
</template>

<script>
  export default {
    name: 'typography',
    data() {
      return {}
    }
  }
  /*
  'xs': '.75rem',     // 12px
  'sm': '.875rem',    // 14px
  'base': '1rem',     // 16px
  'lg': '1.125rem',   // 18px
  'xl': '1.25rem',    // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '2.5rem',    // 40px
  */
</script>
