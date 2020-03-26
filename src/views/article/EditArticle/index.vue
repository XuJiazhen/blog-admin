<template>
  <article-detail :isEdit='true'></article-detail>
</template>

<script>
import ArticleDetail from '../ArticleDetail/index';
export default {
  name: 'EditArticle',
  components: {
    ArticleDetail,
  },
};
</script>
