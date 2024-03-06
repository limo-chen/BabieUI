<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <div class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </div>
    <!-- <img src="./assets/toggleAside.svg" alt="logo" class="toggleAside" /> -->
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
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
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    min-width: 6em;
    margin-right: auto;
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
    display: inline-block;
    width: 24px;
    height: 24px;
    background: red;
    transform: translateY(-50%);
    display: none;
    position: absolute;
    left: 16px;
    top: 50%;
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
