<template>
  <div class="navbar-container">
    <collapse @collapseClick="toggleSidebar" />
    <breadcrumb class="breadcrumb-container" />
    <div class="avatar">
      <!-- <el-avatar :size="medium" :src="circleUrl" shape="square"></el-avatar>
      <i class="el-icon-caret-bottom"></i> -->
    </div>
  </div>
</template>

<script>
import Collapse from '@/components/Collapse';
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Navbar',
  data () {
    return {
      circleUrl: 'https://img.xiaoyou66.com/images/2020/02/20/tTSY.jpg',
    };
  },
  components: {
    Collapse,
    Breadcrumb
  },
  methods: {
    toggleSidebar () {
      this.$store.dispatch('toggleSidebar');
    },
  },
};
</script>

<style lang="less" scoped >
.navbar-container {
  height: 60px;
  box-sizing: border-box;
  border-bottom: solid 1px #e6e6e6;
  display: flex;
  flex-direction: row;
  align-items: center;
  .breadcrumb-container {
    margin-left: 10px;
  }
  .avatar {
    width: 59px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 11px;
  }
}
</style>