<template>
  <div class="navbar-container">
    <collapse @collapseClick="toggleSidebar" />
    <div class="avatar">
      <!-- <el-avatar :size="medium" :src="circleUrl" shape="square"></el-avatar>
      <i class="el-icon-caret-bottom"></i> -->
    </div>
  </div>
</template>

<script>
import Collapse from '@/components/Collapse';
export default {
  name: 'Navbar',
  data() {
    return {
      circleUrl: 'https://img.xiaoyou66.com/images/2020/02/20/tTSY.jpg',
    };
  },
  components: {
    Collapse,
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar');
    },
  },
};
</script>

<style scoped lang="less">
.navbar-container {
  height: 60px;
  box-sizing: border-box;
  border-bottom: solid 1px #e6e6e6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
