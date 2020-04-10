import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '@/views/layout';

Vue.use(VueRouter);

export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'house' }
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/404/index'),
    hidden: true
  }
];

export const privateRoutes = [
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/index',
    children: [
      {
        path: 'index',
        name: 'Admin',
        component: () => import('@/views/admin/index'),
        meta: { title: 'Admin', icon: 'user' }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/list',
    meta: {
      title: 'Article',
      icon: 'document'
    },
    children: [
      {
        path: 'create',
        name: 'CreateArticle',
        component: () => import('@/views/article/CreateArticle/index'),
        meta: { title: 'Create', icon: 'edit-outline' }
      },
      {
        path: 'edit/:id',
        name: 'EditArticle',
        component: () => import('@/views/article/EditArticle/index'),
        meta: { title: 'Edit', icon: 'document' },
        hidden: true
      },
      {
        path: 'list',
        name: 'ArticleList',
        component: () => import('@/views/article/index'),
        meta: { title: 'List', icon: 'notebook-2' }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/index',
    children: [
      {
        path: 'index',
        name: 'Setting',
        component: () => import('@/views/setting/index'),
        meta: { title: 'Setting', icon: 'setting' }
      }
    ]
  }
];

const createRouter = () =>
  new VueRouter({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: publicRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
