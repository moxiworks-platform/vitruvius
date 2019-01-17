<template>
  <section>
    <h1 class="mb-30">Cards / Surfaces</h1>

    <pre class="prettyprint linenums lang-html">
    &lt;!--  Plain HTML --&gt;
    &lt;div class="card level-1"&gt;This is a level 1 card.&lt;/div&gt;
    &lt;!--  Component --&gt;
    &lt;vp-card type="level-1"&gt;This is a level 1 card.&lt;/vp-card&gt;</pre>

    <h3>Basic Card</h3>
    <div class="my-10">
      <vp-card>This the default card with no "level".</vp-card>
    </div>
    <h3>Card - Level 1</h3>
    <div class="my-10">
      <vp-card type="level-1">This is a level 1 card.</vp-card>
    </div>
    <h3>Card - Level 2</h3>
    <div class="my-10">
      <vp-card type="level-2">This is a level 2 card.</vp-card>
    </div>
    <h3>Card - Level 3</h3>
    <div class="my-10">
      <vp-card type="level-3">This is a level 3 card.</vp-card>
    </div>
    <h2>Clickable Lists</h2>
    <h3>List With Icon</h3>

    <pre class="prettyprint linenums lang-html">
    &lt;!-- Compnonent with Icon --&gt;
    &lt;vp-card type="level-1 showhover" icon="icon-heart-filled"&gt;Item 1&lt;/vp-card&gt;
    &lt;vp-card type="level-1 showhover" icon="icon-heart-filled"&gt;Item 2&lt;/vp-card&gt;
    &lt;vp-card type="level-1 showhover" icon="icon-heart-filled"&gt;Item 3&lt;/vp-card&gt;</pre>

    <vp-card type="level-1 showhover" icon="icon-heart-filled" v-on:click="handleOnClick()">Item 1</vp-card>
    <vp-card type="level-1 showhover" icon="icon-heart-filled" v-on:click="handleOnClick()">Item 2</vp-card>
    <vp-card type="level-1 showhover" icon="icon-heart-filled" v-on:click="handleOnClick()">Item 3</vp-card>
    <h3>List With Image</h3>

    <pre class="prettyprint linenums lang-html">
    &lt;!-- Compnonent with Icon --&gt;
    &lt;vp-card type="level-1 showhover" image="https://moxi3.ssl.hwcdn.net/img-pr/a/a8bcb974-2170-4698-946d-aeae23ed8d2b/0_3_full.jpg"&gt;Item 1&lt;/vp-card&gt;
    &lt;vp-card type="level-1 showhover" image="https://moxi3.ssl.hwcdn.net/img-pr/a/a8bcb974-2170-4698-946d-aeae23ed8d2b/0_3_full.jpg"&gt;Item 2&lt;/vp-card&gt;
    &lt;vp-card type="level-1 showhover" image="https://moxi3.ssl.hwcdn.net/img-pr/a/a8bcb974-2170-4698-946d-aeae23ed8d2b/0_3_full.jpg"&gt;Item 3&lt;/vp-card&gt;</pre>

    <vp-card type="level-1 showhover" image="https://moxi3.ssl.hwcdn.net/img-pr/a/a8bcb974-2170-4698-946d-aeae23ed8d2b/0_3_full.jpg" v-on:click="handleOnClick()">Item 1</vp-card>
    <vp-card type="level-1 showhover" image="https://moxi3.ssl.hwcdn.net/img-pr/a/a8bcb974-2170-4698-946d-aeae23ed8d2b/0_3_full.jpg" v-on:click="handleOnClick()">Item 2</vp-card>
    <vp-card type="level-1 showhover" image="https://moxi3.ssl.hwcdn.net/img-pr/a/a8bcb974-2170-4698-946d-aeae23ed8d2b/0_3_full.jpg" v-on:click="handleOnClick()">Item 3</vp-card>

    <h3>Properties</h3>

    <div class="v-flex">
      <div class="v-flex-item w-1/5 bg-cn-20">
        type
      </div>
      <div class="v-flex-item w-4/5 bg-cn-10">
        Optional class list. ['level-1', 'level-2', 'level-3'] and 'showhover' for mouseover.
      </div>
    </div>

    <div class="v-flex">
      <div class="v-flex-item w-1/5 bg-cn-20">
        icon
      </div>
      <div class="v-flex-item w-4/5 bg-cn-10">
        Optional. Pass any Vitruvious icon selector.
      </div>
    </div>

    <div class="v-flex">
      <div class="v-flex-item w-1/5 bg-cn-20">
        image
      </div>
      <div class="v-flex-item w-4/5 bg-cn-10">
        Optional. Pass any image url.
      </div>
    </div>

  </section>
</template>

<script>
import '../components/card/card';

export default {
  name: 'cards',
  data() {
    return {};
  },
  methods: {
    handleOnClick() {
      alert('You Clicked a Thing!');
    }
  }
};
</script>

<style>

</style>
