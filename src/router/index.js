import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '@/views/layout';

Vue.use(VueRouter);

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
  },
  {
    path: '/',
    component: Layout,
  },
];

export default new VueRouter({
  routes: publicRoutes,
  mode: 'history',
});
