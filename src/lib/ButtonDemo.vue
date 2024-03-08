<template>
  <!-- 一个公共样式和一个动态class -->
  <button class="barbie-button" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normel",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size } = props;
    const classes = computed(() => {
      return {
        [`barbie-theme-${theme}`]: theme,
        [`barbie-size-${size}`]: size,
      };
    });
    return {
      classes,
    };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$grey: grey;
.barbie-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.barbie-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.barbie-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.barbie-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.barbie-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.barbie-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.barbie-theme-link,
  &.barbie-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
}
</style>
