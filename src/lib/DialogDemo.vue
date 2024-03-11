<template>
  <div class="dialog-overlay">Dialog组件</div>
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <ButtonDemo>OK</ButtonDemo>
      <ButtonDemo>Cancel</ButtonDemo>
    </footer>
  </div>
</template>
<script lang="ts">
import ButtonDemo from "./ButtonDemo.vue";
export default {
  components: {
    ButtonDemo,
  },
};
</script>
