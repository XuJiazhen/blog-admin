import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import { login } from '@/api/user';
import { setToken } from '../utils/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
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
  },
  getters,
});

export default store;
