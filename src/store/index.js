import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import { login } from '@/api/user';
import { setToken } from '../utils/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: '',
    isCollapse: false,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    TOGGLE_SIDEBAR(state) {
      state.isCollapse = !state.isCollapse;
    },
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
  },
  getters,
});

export default store;
