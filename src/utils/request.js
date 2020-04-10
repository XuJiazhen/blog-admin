import axios from 'axios';
import store from '../store';
import { getToken } from './auth';

const appConfig = require('../app.config');

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8130'
      : appConfig.BASE_URL,
  timeout: 3000
});

service.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers['X-Admin-Token'] = getToken();
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
