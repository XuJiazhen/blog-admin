<template>
  <div>
    <editor ref="editor" v-model="articleForm.content"></editor>
  </div>
</template>
<script>
import Editor from '@/components/MDEditor/index';
export default {
  name: 'ArticleDetail',
  components: {
    Editor,
  },
  data() {
    return {
      articleForm: {
        content: '**Hello World**',
      },
    };
  },
};
</script>
