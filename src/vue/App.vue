<template>
  <div id="app">
    <section id="header" class="p-50 bg-cn-05 fixed pin-t pin-x z-100">
      <div class="w-3/4" style="margin:auto">
        <router-link to="/" class="font-bold">Project Vitruvious</router-link>
        <div class="float-right -mt-2">v0.0.1</div>
      </div>
    </section>

    <section id="content">

      <div class="v-flex-wrap">
        <div class="w-full sm:w-full md:w-1/5 lg:w-1/5 xl:w-1/5 p-30 min-h-screen overflow-y-scroll">
          <div class="overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 fixed">
            <div class="mb-8">
              <p class="mb-20 text-grey uppercase tracking-wide font-bold text-sm">CSS</p>
              <p class="my-10 text-sm">
                <router-link to="/typography">Typography</router-link>
              </p>
              <p class="my-10 text-sm">
                <router-link to="/colors">Colors</router-link>
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
              <p class="my-10 text-sm">
                <router-link to="/card">Cards</router-link>
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
        <div class="w-full sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5 p-30">
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
  h1, h2 {
    font-weight: normal !important;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 20px;
    margin-bottom: 30px;
  }
  h2 {
    margin-top: 30px;
  }
  .hexept {
    font-weight: bold !important;
    border-bottom: 0px !important;
    padding-bottom: initial;
    margin: initial;
  }
  #header {
    a {
      color: #222;
    }
    a:hover {
      text-decoration: none;
    }
  }
  #content {
    padding-top: 156px;
    width: 75%;
    margin: auto;
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
  blockquote {
    border: 1px solid #999;
    background: #e5e5e5;
    padding: 20px;
  }
</style>
