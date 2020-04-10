import Vue from 'vue';
import Vuex from 'vuex';

import { login } from '@/api/user';
import { setToken, removeToken, getToken } from '../utils/auth';

// routes
import { publicRoutes, privateRoutes } from '@/router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: getToken() ? getToken() : '',
    isCollapse: false,
    routes: [],
    roles: []
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    TOGGLE_SIDEBAR(state) {
      state.isCollapse = !state.isCollapse;
    },
    SET_ROUTES(state, routes) {
      state.routes = publicRoutes.concat(routes);
    },
    SET_ROLE(state, role) {
      state.roles.push(role);
    }
  },
  actions: {
    login({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({ username, password })
          .then(response => {
            const { data } = response;
            commit('SET_TOKEN', data.token);
            setToken(data.token);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
    generateRoutes({ commit }) {
      return new Promise(resolve => {
        let accessRoutes = privateRoutes;
        commit('SET_ROUTES', accessRoutes);
        resolve(accessRoutes);
      });
    },
    // roles mock methods
    addRole({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_ROLE', role);
        resolve(role);
      });
    },
    resetToken({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        commit('SET_ROLE', []);
        removeToken();
        resolve();
      });
    }
  },
  getters: {
    permission_routes: state => {
      return state.routes;
    },
    roles: state => {
      return state.roles;
    }
  }
});

export default store;
