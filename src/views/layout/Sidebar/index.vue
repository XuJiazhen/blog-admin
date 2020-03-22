<template>
  <el-menu
    mode="vertical"
    class="menu-container"
    :collapse="isCollapse"
    :collapse-transition="false"
  >
    <el-menu-item index="1">
      <i class="el-icon-house"></i>
      <span>Home</span>
    </el-menu-item>

    <el-menu-item index="2">
      <i class="el-icon-user"></i>
      <span>Admin</span>
    </el-menu-item>

    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span>Article</span>
    </el-menu-item>

    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span>Setting</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    },
  },
};
</script>

<style scoped lang="less">
.menu-container {
  height: 100%;
  border-right: none;
  .el-menu-item {
    &.logo {
      height: 60px;
      text-align: center;
    }
  }
}
</style>
