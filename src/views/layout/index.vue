<template>
  <div class="layout-container"
       :class="{ hide: isHide }">
    <div class="sidebar-container">
      <sidebar />
    </div>
    <div class="main-container">
      <div class="header">
        <navbar />
      </div>
      <div class="main">
        <main-app />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainApp from './MainApp'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    MainApp
  },
  computed: {
    isHide () {
      return this.$store.state.isCollapse;
    },
  },
  mounted () {

  },
};
</script>

<style scoped lang="less">
.layout-container {
  height: 100%;
  width: 100%;
  position: relative;
  .sidebar-container {
    width: 200px;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    overflow: hidden;
    transition: width 0.3s;
  }
  .main-container {
    margin-left: 200px;
    min-height: 100%;
    overflow: hidden;
    transition: margin-left 0.3s;
    border-left: 1px solid #e6e6e6;
    .main {
      padding: 20px;
    }
  }
  &.hide {
    .sidebar-container {
      width: 65px;
    }
    .main-container {
      margin-left: 65px;
    }
  }
}
</style>
