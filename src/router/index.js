import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
  },
];

export default new VueRouter({
  routes: publicRoutes,
});
