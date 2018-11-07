<template>
  <section id="grid">
    <h1 class="mb-30">Grid</h1>

    <p>Vitruvious uses a flex box based grid system. Regular grid and responsive grid examples are below.</p>

    <h2>Regular Grid</h2>

    <pre class="prettyprint linenums lang-html">  &lt;!-- Full width column --&gt;
    &lt;div class="v-flex"&gt;
      &lt;div class="w-full"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Two columns --&gt;
    &lt;div class="v-flex"&gt;
      &lt;div class="v-flex-item w-1/2"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-1/2"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Three columns --&gt;
    &lt;div class="v-flex"&gt;
      &lt;div class="v-flex-item w-1/3"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-1/3"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-1/3"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Four columns --&gt;
    &lt;div class="v-flex"&gt;
      &lt;div class="v-flex-item w-1/4"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-1/4"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-1/4"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-1/4"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Five columns --&gt;
    &lt;div class="v-flex"&gt;
      &lt;div class="v-flex-item w-1/5"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-1/5"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-1/5"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-1/5"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-1/5"&gt;&lt;/div&gt;
    &lt;/div&gt;</pre>

    <!-- Full width column -->
    <div class="v-flex">
      <div class="v-flex-item w-full bg-moxi-green text-center">1</div>
    </div>

    <!-- Two columns -->
    <div class="v-flex">
      <div class="v-flex-item w-1/2 bg-moxi-green text-center">1</div>
      <div class="v-flex-item w-1/2 bg-moxi-green-light text-center">2</div>
    </div>

    <!-- Three columns -->
    <div class="v-flex">
      <div class="v-flex-item w-1/3 bg-moxi-green text-center">1</div>
      <div class="v-flex-item w-1/3 bg-moxi-green-light text-center">2</div>
      <div class="v-flex-item w-1/3 bg-moxi-green text-center">3</div>
    </div>

    <!-- Four columns -->
    <div class="v-flex">
      <div class="v-flex-item w-1/4 bg-moxi-green text-center">1</div>
      <div class="v-flex-item w-1/4 bg-moxi-green-light text-center">2</div>
      <div class="v-flex-item w-1/4 bg-moxi-green text-center">3</div>
      <div class="v-flex-item w-1/4 bg-moxi-green-light text-center">4</div>
    </div>

    <!-- Five columns -->
    <div class="v-flex">
      <div class="v-flex-item w-1/5 bg-moxi-green text-center">1</div>
      <div class="v-flex-item w-1/5 bg-moxi-green-light text-center">2</div>
      <div class="v-flex-item w-1/5 bg-moxi-green text-center">3</div>
      <div class="v-flex-item w-1/5 bg-moxi-green-light text-center">4</div>
      <div class="v-flex-item w-1/5 bg-moxi-green text-center">5</div>
    </div>

    <h2>Responsive Grid</h2>

    <pre class="prettyprint linenums lang-html">  &lt;!-- Six columns --&gt;
    &lt;div class="v-flex-wrap"&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="v-flex-wrap"&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6"&gt;&lt;/div&gt;
      &lt;div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6"&gt;&lt;/div&gt;
    &lt;/div&gt;</pre>

    <!-- Six columns -->
    <div class="v-flex-wrap">
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center">1</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center">2</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center">3</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center">4</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green text-center">5</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green-light text-center">6</div>
    </div>

    <div class="v-flex-wrap">
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center">7</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center">8</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green text-center">9</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-moxi-green-light text-center">10</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green text-center">11</div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 bg-moxi-green-light text-center">12</div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'grid',
  data() {
    return {};
  },
};
</script>
