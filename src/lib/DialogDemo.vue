<template>
  <template v-if="visible">
    <teleport to="body">
      <div @click="OnClickOverlay" class="barbie-dialog-overlay"></div>
      <div class="barbie-dialog-wrapper">
        <div class="barbie-dialog">
          <header>
            <slot name="title" />
            <span @click="close" class="barbie-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <ButtonDemo level="main" @click="ok">OK</ButtonDemo>
            <ButtonDemo @click="cancel">Cancel</ButtonDemo>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import ButtonDemo from "./ButtonDemo.vue";
export default {
  components: {
    ButtonDemo,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    OnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const OnClickOverlay = () => {
      if (props.OnClickOverlay) {
        close();
      }
    };
    //  if (props.ok && props.ok() !== false) 可缩写为 props.ok?.() !== false
    // 意思是close不存在直接退出，如果close存在则对比返回值与false是否是不相等的，只要不是false就执行close
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        close();
      }
    };

    const cancel = () => {
      if (props.cancel && props.cancel() !== false) {
        close();
      }
    };
    return {
      close,
      OnClickOverlay,
      ok,
      cancel,
    };
  },
};
</script>
<style lang="scss">
$radius: 4px;
$boreder-color: #d9d9d9;

.barbie-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  // 遮罩层
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $boreder-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $boreder-color;

    padding: 12px 16px;
    text-align: right;
  }
  // 关闭按钮
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    // 将 ::before 和 ::after 伪元素向左和向上移动一定的距离，并且分别将它们逆时针旋转 45 度和顺时针旋转 45 度
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
