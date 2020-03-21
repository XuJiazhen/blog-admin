import Cookie from 'js-cookie';

const tokenKey = 'Admin-Key';

export function getToken() {
  return Cookie.get(tokenKey);
}

export function setToken(token) {
  return Cookie.set(tokenKey, token);
}
