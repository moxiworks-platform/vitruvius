<template>
  <div id="app">
    <section id="header" class="p-50 bg-cn-05">
      <div class="w-full">
        <router-link to="/" class="font-bold">Project Vitruvius</router-link>
        <div class="float-right -mt-2">v0.0.1</div>
      </div>
    </section>

    <section id="container">

      <div id="nav">
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

      <div id="content">
        <router-view :key="$route.fullPath" />
      </div>

    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#header {
  position: fixed;
  width: 100vw;
  z-index: 5000;
  a {
    color: #222;
  }
  a:hover {
    text-decoration: none;
  }
}
#container {
  padding-top: 118px;
}
#nav {
  width: 275px;
  padding: 50px;
  position: fixed;
  top: 118px;
  bottom: 0;
  overflow: auto;
}
#content {
  position: absolute;
  top: 118px;
  left: 275px;
  right: 0;
  padding: 50px;
}
pre {
  padding: 20px !important;
  /* margin: 30px 0; */
}
pre {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
blockquote {
  border: 1px solid #999;
  background: #e5e5e5;
  padding: 20px;
}
</style>
