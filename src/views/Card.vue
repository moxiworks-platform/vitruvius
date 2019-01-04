<template>
  <section>
    <h1 class="mb-30">Cards / Surfaces</h1>
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
  </section>
</template>

<script>
import '../components/card/card';

export default {
  name: 'cards',
  data() {
    return {};
  },
};
</script>

<style>

</style>
