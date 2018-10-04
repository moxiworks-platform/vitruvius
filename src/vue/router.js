import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
const Colors = () => import(/* webpackChunkName: "colors" */ './views/Colors.vue');
const Grid = () => import(/* webpackChunkName: "grid" */ './views/Grid.vue');
const Buttons = () => import(/* webpackChunkName: "buttons" */ './views/Buttons.vue');
const Icons = () => import(/* webpackChunkName: "icons" */ './views/Icons.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/colors',
      name: 'colors',
      component: Colors
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: Buttons
    },
    {
      path: '/icons',
      name: 'icons',
      component: Icons
    }
  ]
})
