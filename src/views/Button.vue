<template>
  <div>button示例</div>
  <h1>示例1</h1>
  <div>
    <ButtonDemo>你好</ButtonDemo>
    <ButtonDemo theme="button">你好</ButtonDemo>
    <ButtonDemo theme="link">你好</ButtonDemo>
    <ButtonDemo theme="text">你好</ButtonDemo>
  </div>
</template>

<script lang="ts">
import ButtonDemo from "../lib/ButtonDemo.vue";
export default {
  components: {
    ButtonDemo,
  },
  setup() {},
};
</script>
