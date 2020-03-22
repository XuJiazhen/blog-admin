<template>
  <div class="layout-container" :class="{ hide: isHide }">
    <div class="sidebar-container">
      <sidebar />
    </div>
    <div class="main-container">
      <div class="header"><navbar /></div>
      <div class="main"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import Navbar from './Navbar';
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
  },
  computed: {
    isHide() {
      return this.$store.state.isCollapse;
    },
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
