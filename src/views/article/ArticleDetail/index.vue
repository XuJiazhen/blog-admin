<template>
  <div class="articleDtail-container">
    <el-form ref="articleForm"
             :model="articleForm"
             :rules="articleRules"
             class="articleForm">
      <div class="subnav">
        <template v-if="!isEdit">
          <el-button type="primary"
                     size="small"
                     @click="submitForm"
                     :loading="loading">
            Publish
          </el-button>
        </template>
        <template v-else>
          <el-button type="primary"
                     size="small"
                     @click="updateForm(id)"
                     :loading="loading">
            Update
          </el-button>
        </template>
        <cover-link v-model="articleForm.coverUrl"></cover-link>
      </div>

      <el-row>
        <el-col :span="24">
          <el-form-item prop="title">
            <el-input placeholder="Title"
                      v-model="articleForm.title"
                      maxlength="100" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item prop="author">
            <el-input placeholder="Author"
                      v-model="articleForm.author"
                      prefix-icon="el-icon-user"
                      maxlength="12" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <el-date-picker placeholder="Date"
                            type="datetime"
                            format="yyyy-MM-dd HH:mm:ss"
                            v-model="articleForm.releasedAt" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item prop="summary">
            <el-input v-model="articleForm.summary"
                      placeholder="Summary"
                      type="textarea"
                      autosize
                      :rows="1"
                      resize="none" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <editor ref="editor"
            v-model="articleForm.content"
            class="editor"></editor>
  </div>
</template>

<script>
import CoverLink from './components/CoverLink'
import Editor from '@/components/MDEditor/index';
import { createArticle, getArticleByID, updateArticle } from '@/api/article';
export default {
  name: 'ArticleDetail',
  components: {
    Editor,
    CoverLink
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        const field = rule.field.replace(
          rule.field[0],
          rule.field[0].toUpperCase(),
        );

        return callback(new Error(`${field} is required.`));
      } else {
        callback();
      }
    };
    return {
      id: (this.$route.params && this.$route.params.id) || '',
      articleForm: {
        title: '',
        author: '',
        summary: '',
        content: '',
        coverUrl: '',
        releasedAt: null,
        updatedAt: null
      },
      articleRules: {
        title: {
          validator: validateRequire,
          trigger: 'blur',
        },
        author: {
          validator: validateRequire,
          trigger: 'blur',
        },
        date: {
          validator: validateRequire,
          trigger: 'blur',
        },
        summary: {
          validator: validateRequire,
          trigger: 'blur',
        }
      },
      loading: false,
    };
  },
  methods: {
    submitForm () {
      this.$refs.articleForm.validate(valid => {
        if (valid) {
          this.articleForm.content = this.$refs.editor.getMarkdown()
          this.loading = true;
          createArticle(this.articleForm).then(() => {
            this.$notify({
              title: 'Success',
              message: 'Publish Successed',
              type: 'success',
              duration: 2000,
            });
            this.loading = false;
            this.$router.push('/article/list')
          });
        } else {
          return false;
        }
      });
    },
    updateForm (id) {
      this.loading = true
      const data = this.articleForm
      data.updatedAt = new Date()
      data.content = this.$refs.editor.getMarkdown()
      updateArticle(id, data).then(() => {

        this.$notify({
          title: 'Success',
          message: 'Update Successed',
          type: 'success',
          duration: 2000,
        });
        this.loading = false;
      })

    },
    fetchArticleData (id) {
      getArticleByID(id).then((response) => {
        const { data } = response
        this.articleForm = data
        this.setPageTitle()
      })
    },
    setPageTitle () {
      const title = 'Edit Article'
      document.title = title
    },
  },
  created () {
    if (this.isEdit) {
      this.fetchArticleData(this.id)
    }
  },
};
</script>

<style lang="less">
.articleForm {
  .el-form-item {
    input {
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
    }
  }
  .el-date-editor {
    width: 100%;
    input {
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
    }
  }
  .el-row {
    margin: 0 10px;
  }
  .el-textarea {
    textarea {
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
    }
  }
}
</style>

<style scoped lang="less">
.articleDtail-container {
  .articleForm {
    height: 30vh;
    .subnav {
      width: 100%;
      height: 50px;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      .el-button {
        background-color: #fff;
        color: #303133;
        border-color: #e6e6e6;
        height: 35px;
        margin-right: 20px;
        transition: background-color 0.3s;
        &:hover {
          background-color: #ecf5ff;
        }
      }
    }
  }
  .editor {
    margin: 10px;
    height: 70vh;
  }
}
</style>
