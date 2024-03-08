<template>
  <div>button示例</div>
  <h1>示例1</h1>
  <div>
    <ButtonDemo @click="onClick">你好</ButtonDemo>
    <ButtonDemo theme="button">你好</ButtonDemo>
    <ButtonDemo theme="link">你好</ButtonDemo>
    <ButtonDemo theme="text">你好</ButtonDemo>
  </div>
  <h1>示例2</h1>
  <div>
    <ButtonDemo size="big">大大大</ButtonDemo>
    <ButtonDemo>普普通</ButtonDemo>
    <ButtonDemo size="small">小小小</ButtonDemo>
  </div>
  <div>
    <div>
      <ButtonDemo theme="link" size="big">大大大</ButtonDemo>
      <ButtonDemo theme="link">普普通</ButtonDemo>
      <ButtonDemo size="small" theme="link">小小小</ButtonDemo>
    </div>
    <div>
      <ButtonDemo size="big" theme="text">大大大</ButtonDemo>
      <ButtonDemo theme="text">普普通</ButtonDemo>
      <ButtonDemo size="small" theme="text">小小小</ButtonDemo>
    </div>
    <h1>示例3</h1>
    <div>
      <ButtonDemo>禁用按钮</ButtonDemo>
      <ButtonDemo theme="button">禁用按钮</ButtonDemo>
      <ButtonDemo theme="link">禁用按钮</ButtonDemo>
    </div>
    <h1>示例4</h1>
    <div>
      <ButtonDemo loading>加载中</ButtonDemo>
      <ButtonDemo>加载完毕</ButtonDemo>
    </div>
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
