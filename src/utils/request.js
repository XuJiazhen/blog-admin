import axios from 'axios';
import store from '../store';
import { getToken } from './auth';

const service = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000,
});

service.interceptors.request.use(
  config => {
    console.log(store.state.token);

    if (store.state.token) {
      config.headers['X-Admin-Token'] = getToken();
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default service;
