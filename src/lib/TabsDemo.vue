<template>
  <div class="barbie-tabs">
    <div class="barbie-tabs-nav">
      <div
        class="barbie-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
      >
        {{ t }}
      </div>
    </div>
    <div class="barbie-tabs-content">
      <component
        class="barbie-tabs-content-item"
        v-for="(c, index) in defaults"
        :is="c"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import TabDemo from "./TabDemo.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== TabDemo) {
        throw new Error("Tabs组件只能接收Tab作为子标签");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return {
      defaults,
      titles,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.barbie-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
