const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/typography', component: Typography },
    { path: '/colors', component: Colors },
    { path: '/grid', component: Grid },
    { path: '/toasts', component: Toasts },
    { path: '/form-elements', component: FormElements },
    { path: '/buttons', component: Buttons }
  ]
});

router.afterEach(() => {
  setTimeout(() => {
    document.querySelector('#right-container').scrollTop = 0;
    Prism.highlightAll();
  }, 10);
});