<template>
  <div id="app">
    <section id="header" class="p-30 bg-cn-100 text-white fixed pin-t pin-x z-100">
      Vitruvious Project
      <div class="float-right">v0.0.1</div>
    </section>

    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>

  export default {
    name: 'app',
    data () {
      return {

      }
    },
    components: {
      
    }
  }
</script>

<style lang="scss">
  #app {
    color: #222;
  }
</style>
