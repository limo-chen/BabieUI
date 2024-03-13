<template>
  <div>Tab示例</div>
  <h1>示例</h1>
  <TabsDemo v-model:selected="x">
    <TabDemo title="导航一">内容一</TabDemo>
    <TabDemo title="导航二">内容二</TabDemo>
  </TabsDemo>
</template>
<script lang="ts">
import TabDemo from "../lib/TabDemo.vue";
import TabsDemo from "../lib/TabsDemo.vue";
import { ref } from "vue";
export default {
  components: {
    TabDemo,
    TabsDemo,
  },
  setup() {
    const x = ref("导航一");
    return {
      x,
    };
  },
};
</script>
