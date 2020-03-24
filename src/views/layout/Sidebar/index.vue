<template>
  <el-menu
    mode="vertical"
    class="menu-container"
    :collapse="isCollapse"
    :collapse-transition="false"
    :default-active="activeMenu"
  >
    <sidebar-item
      v-for="route in permission_routes"
      :key="route.path"
      :item="route"
      :basePath="route.path"
    ></sidebar-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './components/SidebarItem';
export default {
  name: 'Sidebar',
  components: {
    SidebarItem,
  },
  computed: {
    ...mapGetters(['permission_routes']),
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    activeMenu() {
      const { path } = this.$route;
      return path;
    },
  },
};
</script>

<style scoped lang="less">
.menu-container {
  &.el-menu--collapse {
    div {
      a {
        li {
          span {
            color: red;
          }
        }
      }
    }
  }
  height: 100%;
  border-right: none;

  .el-menu-item {
    height: 59px;
    padding: 0 !important;
    &.logo {
      height: 60px;
      text-align: center;
    }
  }
}
</style>
