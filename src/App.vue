<template>
  <div id="app">
    <section id="header" class="p-30 bg-cn-100 text-white fixed pin-t pin-x z-100">
      <router-link to="/">Vitruvious Project</router-link>
      <div class="float-right">v0.0.1</div>
    </section>

    <section id="content">

      <div class="mx-flex-wrap">
        <div class="w-full sm:w-1 md:w-1/4 lg:w-1/4 xl:w-1/4 p-30">
          <div class="overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
            <div class="mb-8">
              <p class="mb-20 text-grey uppercase tracking-wide font-bold text-sm">CSS</p>
              <p class="my-10 text-sm">
                <router-link to="/colors">Colors</router-link></a>
              </p>
              <p class="my-10 text-sm">
                <router-link to="/grid">Grid</router-link>
              </p>
            </div>

            <div class="mb-8">
              <p class="my-20 text-grey uppercase tracking-wide font-bold text-sm">Components</p>
              <p class="my-10 text-sm">
                <router-link to="/buttons">Buttons</router-link>
              </p>
            </div>

            <div class="mb-8">
              <p class="my-20 text-grey uppercase tracking-wide font-bold text-sm">Misc</p>
              <p class="my-10 text-sm">
                <router-link to="/icons">Icons</router-link>
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
  #header {
    a {
      color: #fff;
    }
    a:hover {
      text-decoration: none;
    }
  }
  #content {
    padding-top: 78px;
  }
  pre {
    padding: 20px !important;
    margin: 30px 0;
  }
  pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }
</style>
