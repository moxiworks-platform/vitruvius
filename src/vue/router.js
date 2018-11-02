import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
const Colors = () => import(/* webpackChunkName: "colors" */ './views/Colors.vue');
const Grid = () => import(/* webpackChunkName: "grid" */ './views/Grid.vue');
const Buttons = () => import(/* webpackChunkName: "buttons" */ './views/Buttons.vue');
const Icons = () => import(/* webpackChunkName: "icons" */ './views/Icons.vue');
const Typography = () => import(/* webpackChunkName: "typography" */ './views/Typography.vue');
const Card = () => import(/* webpackChunkName: "Card" */ './views/Card.vue');

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
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
    },
    {
      path: '/typography',
      name: 'typography',
      component: Typography
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    }
  ]
})
