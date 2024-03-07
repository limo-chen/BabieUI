<template>
  <div><SwitchDemo v-model:value="bool" /></div>
</template>

<script>
import SwitchDemo from "../lib/SwitchDemo.vue";
import { ref } from "vue";
export default {
  components: {
    SwitchDemo,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>
