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

export function deleteArticle(id) {
  return request({
    url: `/article/${id}`,
    method: 'delete',
  });
}

export function getArticleByID(id) {
  return request({
    url: `/article/${id}`,
    method: 'get',
  });
}

export function updateArticle(id, data) {
  return request({
    url: `/article/${id}`,
    method: 'put',
    data,
  });
}
