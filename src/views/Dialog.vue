<template>
  <div>Diolag示例</div>
  <h1>示例1</h1>
  <ButtonDemo @click="toggle">toggle Dialog</ButtonDemo>
  <DialogDemo v-model:visible="x" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>提示:自定义标题</strong>
    </template>
    <template v-slot:content>
      <div>你好</div>
      <div>撒浪嘿呦</div>
    </template>
  </DialogDemo>
</template>
<script lang="ts">
import ButtonDemo from "../lib/ButtonDemo.vue";
import DialogDemo from "../lib/DialogDemo.vue";
import { ref } from "vue";
export default {
  components: {
    DialogDemo,
    ButtonDemo,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return {
      x,
      toggle,
      f1,
      f2,
    };
  },
};
</script>
