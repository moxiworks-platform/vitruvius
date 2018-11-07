import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Colors from './views/Colors';
import Buttons from './views/Buttons';
import Typography from './views/Typography';
import Grid from './views/Grid';
import Icons from './views/Icons';

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/colors',
      name: 'colors',
      component: Colors,
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: Buttons,
    },
    {
      path: '/typography',
      name: 'typography',
      component: Typography,
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid,
    },
    {
      path: '/icons',
      name: 'icons',
      component: Icons,
    },
  ],
});
