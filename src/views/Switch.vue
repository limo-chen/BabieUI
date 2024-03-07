<template>
  <div><SwitchDemo v-model:value="y" /></div>
</template>

<script>
import SwitchDemo from "../lib/SwitchDemo.vue";
import { ref } from "vue";
export default {
  components: {
    SwitchDemo,
  },
  setup() {
    const y = ref(false);
    return {
      y,
    };
  },
};
</script>
