<template>
  <section class="main-app-container">
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'MainApp'
}
</script>

<style scoped lang="less">
.fade-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>