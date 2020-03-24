import router from '@/router';
import { getToken } from '@/utils/auth';
import store from './store';

const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        try {
          await store.dispatch('addRole', 'Admin');

          const assessRoutes = await store.dispatch('generateRoutes');
          router.addRoutes(assessRoutes);
          next({ ...to, replace: true });
        } catch (error) {
          await store.dispatch('resetToken');
          next({ path: '/login' });
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({ path: '/login' });
    }
  }
});

router.afterEach(() => {
  console.log('Leave current route.');
});
