<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="item in matchedList"
                          :key="item.path">
        <span v-if="new RegExp(/\/:id/).test(item.path)"
              class="paramRoute">{{item.meta.title}}: {{id}}</span>
        <router-link v-else
                     :to="item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      matchedList: [],
      id: undefined
    }
  },
  created () {
    this.getMatchedRouteInfo()
  },
  watch: {
    $route () {
      this.getMatchedRouteInfo()
    }
  },
  methods: {
    getMatchedRouteInfo () {
      this.id = this.$route.params.id || ''
      let matched = this.$route.matched
        .filter(item => item.meta && item.meta.title)
        .map(item => {
          return {
            path: item.path,
            name: item.name || '',
            meta: { title: item.meta.title }
          }
        })

      if (!this.isDashboard(matched[0])) {
        const dashboard = { path: '/dashboard', name: 'Dashboard', meta: { title: 'Dashboard' } }
        matched = [dashboard].concat(matched)
      }

      this.matchedList = matched

    },
    isDashboard (route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.toLowerCase() === 'Dashboard'.toLowerCase()
    },
  },
}
</script>

<style lang="less" scoped>
.paramRoute {
  color: #97a8be;
  cursor: default;
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}
.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}
.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>