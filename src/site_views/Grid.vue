<template>
  <section id="grid">
    <h1 class="mb-30">Grid</h1>

    <!-- Full width column -->
    <div class="mx-flex mb-10">
      <div class="w-full bg-cn-40 h-12"></div>
    </div>

    <!-- Two columns -->
    <div class="mx-flex mb-10">
      <div class="w-1/2 bg-cn-40 h-12"></div>
      <div class="w-1/2 bg-cn-20 h-12"></div>
    </div>

    <!-- Three columns -->
    <div class="mx-flex mb-10">
      <div class="w-1/3 bg-cn-40 h-12"></div>
      <div class="w-1/3 bg-cn-20 h-12"></div>
      <div class="w-1/3 bg-cn-40 h-12"></div>
    </div>

    <!-- Four columns -->
    <div class="mx-flex mb-10">
      <div class="w-1/4 bg-cn-40 h-12"></div>
      <div class="w-1/4 bg-cn-20 h-12"></div>
      <div class="w-1/4 bg-cn-40 h-12"></div>
      <div class="w-1/4 bg-cn-20 h-12"></div>
    </div>

    <!-- Five columns -->
    <div class="mx-flex mb-10">
      <div class="w-1/5 bg-cn-40 h-12"></div>
      <div class="w-1/5 bg-cn-20 h-12"></div>
      <div class="w-1/5 bg-cn-40 h-12"></div>
      <div class="w-1/5 bg-cn-20 h-12"></div>
      <div class="w-1/5 bg-cn-40 h-12"></div>
    </div>

    <h3 class="my-30">Responsive Grid</h3>

    <!-- Six columns -->
    <div class="mx-flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-10 bg-cn-40 h-12"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-10 bg-cn-20 h-12"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-10 bg-cn-40 h-12"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-10 bg-cn-20 h-12"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-10 bg-cn-40 h-12"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-10 bg-cn-20 h-12"></div>
    </div>

    <div class="mx-flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-10 bg-cn-40 h-12"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-10 bg-cn-20 h-12"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-10 bg-cn-40 h-12"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-10 bg-cn-20 h-12"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-10 bg-cn-40 h-12"></div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-10 bg-cn-20 h-12"></div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'grid',
    data() {
      return {}
    }
  }
</script>
