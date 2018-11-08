import '@webcomponents/custom-elements';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'whatwg-fetch'
import VueFetch from 'vue-fetch'

Vue.use(VueFetch, {
  polyfill: true
});

// Secret sauce to ignore custom skateJS components.
Vue.config.ignoredElements = [/vp-\w*/];

router.afterEach(() => {
  setTimeout(() => {
    PR.prettyPrint();
    riot.mount('*');
  }, 10);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
