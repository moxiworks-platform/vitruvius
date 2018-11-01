<template>
  <section id="card">
    <h1 class="mb-30">Cards</h1>

    <vp-card name="foo">
      This is a card.
    </vp-card>

    <div class="v-flex-wrap">
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <vp-card image="https://i.imgur.com/Hb21JAa.jpg">
          This is a card with an image.
        </vp-card>
      </div>
      <div class="v-flex-item w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <vp-card
          image="https://i.imgur.com/Hb21JAa.jpg"
          reveal="This is Richard Sherman. Perhaps the greatest niner of all time.">
          This is a card with an image and image reveal.
        </vp-card>
      </div>
    </div>
  </section>
</template>

<script>
  import { card } from '../../components/card/card'
  export default {
    data() {
      return {}
    }
  }
</script>

<style>

</style>
