<template>
  <div class="article-list-container">
    <el-table ref="articleList"
              :data="tableData"
              highlight-current-row
              style="width: 100%"
              border
              class="articleList">
      <el-table-column label="ID"
                       align="center"
                       width="240">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date"
                       label="Date"
                       align="center"
                       width="240">
        <template slot-scope="scope">
          <span>{{scope.row.date | parseTime}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="title"
                       label="Title"
                       align="center"
                       width="" />
      <el-table-column prop="author"
                       label="Author"
                       align="center"
                       width="120" />
      <el-table-column label="Edit"
                       align="center"
                       width="160">
        <template slot-scope="{row}">
          <router-link :to="`/article/edit/${row.id}`">
            <el-button type="primary"
                       size="mini"
                       icon="el-icon-edit" />
          </router-link>

          <el-button type="danger"
                     size="mini"
                     icon="el-icon-delete"
                     :loading="loading"
                     @click="handleDelete(row.id)" />
        </template>

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAllArticles, deleteArticle } from '@/api/article';
export default {
  name: 'ArticleList',
  data () {
    return {
      tableData: [],
      loading: false
    };
  },
  created () {
    this.getList()
  },
  methods: {
    handleEdit (scope) {
      console.log(scope)
    },
    handleDelete (id) {
      this.loading = true
      this.$confirm('是否永久删除此篇文章？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteArticle(id).then((response) => {
          console.log('删除文章：', response);
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getList()
          this.loading = false
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
        this.loading = false
      })

    },
    getList () {
      getAllArticles().then(response => {
        const result = response.data.map(item => {
          const timestamp = Date.parse(item.date);

          return {
            id: item._id,
            date: timestamp,
            author: item.author,
            title: item.title,
          };
        });
        this.tableData = result;
      });
    }
  },
  filters: {
    parseTime (val) {
      const dateFormat = '{y}-{m}-{d} {h}:{i}:{s}'
      const date = new Date(val)
      const dateInfoObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds()
      }
      const timeStr = dateFormat.replace(/{([ymdhis])+}/g, (ret, key) => {
        const val = dateInfoObj[key]

        return val.toString()
      })
      return timeStr
    }
  }
};
</script>

<style lang="less" scoped>
.article-list-container {
  margin: 10px;
  .el-button {
    transition: background-color 0.3s;
    margin: 0 5px;
  }
}
</style>
