<template>
  <div class="article-list-container">
    <el-table
      ref="articleList"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
      class="articleList"
    >
      <el-table-column type="index" label="ID" />
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="title" label="Title" />
      <el-table-column prop="author" label="Author" />
    </el-table>
  </div>
</template>

<script>
import { getAllArticles } from '@/api/article';
export default {
  name: 'ArticleList',
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    getAllArticles().then(response => {
      const result = response.data.map(item => {
        const timestamp = Date.parse(item.date);
        const day = new Date(timestamp).toLocaleDateString();
        const time = new Date(timestamp).toLocaleTimeString();
        return {
          date: `${day} ${time}`,
          author: item.author,
          title: item.title,
        };
      });
      this.tableData = result;
    });
  },
};
</script>

<style lang="less" scoped>
.articleList {
  margin: 10px;
}
</style>
