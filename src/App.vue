<template>
  <div id="app">
    <section id="header" class="p-50 bg-cn-05">
      <div class="w-full">
        <div id="btn-nav" v-on:click="toggleMenu()"><a href="#" class="menu-toggle"><span></span><span></span><span></span></a></div>
        <router-link to="/" class="font-bold">Project Vitruvius</router-link>
        <div class="float-right">v{{version}}</div>
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
            <router-link to="/card">Cards / Surfaces</router-link>
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
    return {
      package: {},
      version: '0.0.1',
    };
  },
  mounted() {
    this.getVersion();
  },
  methods: {
    getVersion() {
      this.$fetch.get('./package.json').then((response) => {
        return response.json().then((json) => {
          this.version = json.version;
        });
      });
    },
    toggleMenu(force = false) {
      const nav = document.querySelector('.menu-toggle');
      const menu = document.querySelector('#nav');

      if (nav.classList && nav.classList.contains('close') || force) {
        nav.classList.remove('close');
        menu.classList.remove('open');
      } else {
        nav.classList.add('close');
        menu.classList.add('open');
        menu.scrollTop = 0;
      }
    },
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
  @media screen and (max-width: 420px) {
    padding-left: 70px;
  }
}
#btn-nav {
  position: absolute;
  top: 29px;
  left: 0;
  display: none;
  @media screen and (max-width: 420px) {
    display: block;
  }
}
.menu-toggle {
    width: 24px;
    height: 53px;
    position: absolute;
    left: 23px;
    top: 3px;
    transition: cubic-bezier(.22,.61,.36,1);
    z-index: 110;
}
.menu-toggle span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #222;
    position: absolute;
    left: 0;
    transition: all 0.125s ease-out;
}
.menu-toggle span:first-child {
    top: 19px;
    width: 90%;
}
.menu-toggle span:nth-child(2) {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.menu-toggle span:nth-child(3) {
    bottom: 18px;
    width: 80%;
}
.menu-toggle.close span:first-child {
    opacity: 0;
    visibility: hidden;
}
.menu-toggle.close span:nth-child(2) {
    top: 50%;
    -webkit-transform: rotate(45deg) translateY(-50%);
    transform: rotate(45deg) translateY(-50%);
}
.menu-toggle.close span:nth-child(3) {
    bottom: 50%;
    -webkit-transform: rotate(-45deg) translateY(50%);
    transform: rotate(-45deg) translateY(50%);
    width: 100%;
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
@media screen and (max-width: 420px) {
  #nav, #nav.close {
    position: absolute;
    left: -275px;
    background: #fff;
  }
  #nav.open {
    left: 0;
  }
}
#content {
  position: absolute;
  top: 118px;
  left: 275px;
  right: 0;
  padding: 50px;
  @media screen and (max-width: 420px) {
    position: initial;
  }
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
