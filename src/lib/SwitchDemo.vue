<template>
  <div>
    <button
      class="barbie-switch"
      :class="{ 'barbie-checked': value }"
      @click="toggle"
    >
      <span></span>
    </button>
    <div>{{ value }}</div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    //toggle的作用就是通过input事件取反，然后emit（发出）出去；告诉外面有用户点击了，
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return {
      toggle,
    };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.barbie-switch {
  height: $h;
  width: $h * 2;
  border: none;
  //   灰色背景
  background: #dcdcdc;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.barbie-checked {
    background: #338cff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.barbie-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
