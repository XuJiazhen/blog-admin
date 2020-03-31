<template>
  <el-dropdown trigger="click">
    <el-button type="primary"
               size="small">
      Cover<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-form-item>
        <el-input v-model="coverUrl"
                  placeholder="Please Enter the Cover Image URL.">
          <template slot="prepend">URL</template>
        </el-input>
      </el-form-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'CoverLink',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    coverUrl: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-dropdown {
  font-size: 12px;
  height: 35px;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
  .el-button {
    background-color: #fff;
    border-color: #e6e6e6;
    font-size: 12px;
    height: 35px;
    color: #303133;
    transition: background-color 0.3s;
    &:hover {
      background-color: #ecf5ff;
    }
  }
}
.el-dropdown-menu {
  padding: 0;
  width: 350px;
  .el-form-item {
    margin: 0;
  }
}
</style>