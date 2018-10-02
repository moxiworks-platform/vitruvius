<template>
  <div id="app">
    <section id="header" class="p-30 bg-cn-100 text-white fixed pin-t pin-x z-100">
      Vitruvious Project
      <div class="float-right">v0.0.1</div>
    </section>

    <section id="content">

      <div class="mx-flex-wrap">
        <div class="w-full sm:w-1 md:w-1/4 lg:w-1/4 xl:w-1/4 p-30">
          <div class="overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
            <div class="mb-8">
              <p class="mb-20 text-grey uppercase tracking-wide font-bold text-sm">CSS</p>
              <p class="my-10 text-sm">
                <a href="">Colors</a>
              </p>
              <p class="my-10 text-sm">
                <a href="">Grid</a>
              </p>
            </div>

            <div class="mb-8">
              <p class="my-20 text-grey uppercase tracking-wide font-bold text-sm">Components</p>
              <p class="my-10 text-sm">
                <a href="">Buttons</a>
              </p>
            </div>

            <div class="mb-8">
              <p class="my-20 text-grey uppercase tracking-wide font-bold text-sm">Misc</p>
              <p class="my-10 text-sm">
                <a href="">Icons</a>
              </p>
            </div>

          </div>
        </div>
        <div class="w-full sm:w-1 md:w-3/4 lg:w-3/4 xl:w-3/4 p-30">
          <router-view :key="$route.fullPath" />
        </div>
      </div>

    </section>
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
  #content {
    padding-top: 78px;
  }
</style>
