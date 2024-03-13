<template>
  <div>
    <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
    <component v-for="(c, index) in defaults" :is="c" :key="index" />
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
