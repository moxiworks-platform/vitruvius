const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/icons', component: Icons }
  ]
});

router.afterEach(() => {
  setTimeout(() => {
    Prism.highlightAll();
  }, 10);
});
