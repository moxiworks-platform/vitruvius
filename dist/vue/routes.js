const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/typography', component: Typography },
    { path: '/colors', component: Colors },
    { path: '/grid', component: Grid },
    { path: '/toasts', component: Toasts },
    { path: '/buttons', component: Buttons }
  ]
});

router.afterEach(() => {
  setTimeout(() => {
    
  }, 10);
});