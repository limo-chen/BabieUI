<template>
  <div class="topnav">
    <router-link to="/" class="logo" @click="toggleMenu">
      <svg class="icon">
        <use xlink:href="#icon-barbie"></use>
      </svg>
    </router-link>
    <div class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </div>
    <!-- <img src="./assets/toggleAside.svg" alt="logo" class="toggleAside" /> -->
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu-1"></use>
    </svg>
    <span></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
$color: #ffffff;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    min-width: 6em;
    margin-right: auto;
    > svg {
      width: 45px;
      height: 45px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }

  .toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    display: none;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  // 当页面宽度是500时，.menu隐藏; .logo设置为左右都是auto

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
