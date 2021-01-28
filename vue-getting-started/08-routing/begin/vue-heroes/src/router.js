import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from './views/page-not-found';

Vue.use(Router);

const parseProps = r => ({ id: parseFloat(r.params.id) });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/heroes',
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: () =>
        import(/* webpackChunkName: "bundle-heroes" */ './views/heroes.vue'),
    },
    {
      path: '/heroes/:id',
      name: 'hero-detail',
      component: () =>
        import(/* webpackChunkName: "bundle-heroes" */ './views/hero-detail.vue'),
      // component: HeroDetail,
      props: parseProps,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "bundle-about" */ './views/About.vue'),
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
