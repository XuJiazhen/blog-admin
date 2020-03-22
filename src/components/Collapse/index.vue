<template>
  <div class="collapse-container" @click="handleClick">
    <svg
      :class="{ active: isActive }"
      class="collapse"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
    >
      <path
        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  methods: {
    handleClick() {
      this.$emit('collapseClick');
    },
  },
  computed: {
    isActive() {
      return this.$store.state.isCollapse;
    },
  },
};
</script>

<style scoped lang="less">
.collapse-container {
  width: 59px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ecf5ff;
    cursor: pointer;
  }
  .collapse {
    transform: rotate(180deg);
    &.active {
      transform: rotate(360deg);
    }
  }
}
</style>
