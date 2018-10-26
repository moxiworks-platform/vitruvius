import Vue from 'vue';
import App from './App.vue';
import router from './router'

Vue.config.ignoredElements = [/vp-\w*/];

router.afterEach((to, from, next) => {
  setTimeout(() => {
    PR.prettyPrint();
  }, 10)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
