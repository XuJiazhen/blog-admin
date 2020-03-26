import request from '@/utils/request';

export function createArticle(data) {
  return request({
    url: '/article',
    method: 'post',
    data,
  });
}

export function getAllArticles() {
  return request({
    url: '/article',
    method: 'get',
  });
}
