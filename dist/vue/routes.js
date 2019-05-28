const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/typography', component: Typography },
    { path: '/colors', component: Colors },
    { path: '/buttons', component: Buttons }
  ]
});

router.afterEach(() => {
  setTimeout(() => {
    PR.prettyPrint();
  }, 10);
});