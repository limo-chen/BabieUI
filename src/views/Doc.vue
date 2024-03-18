<template>
  <div class="layout">
    <Topnav class="nav" :toggleMenuButtonVisible="true" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>

        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/started">开始使用</router-link>
        </li>

        <h2>组件列表</h2>
        <li>
          <router-link to="/doc/switch">Switch组件</router-link>
        </li>
        <li>
          <router-link to="/doc/Button">Button组件</router-link>
        </li>
        <li>
          <router-link to="/doc/Dialog">Dialog组件</router-link>
        </li>
        <li>
          <router-link to="/doc/Tabs">Tabs组件</router-link>
        </li>
      </aside>
      <main><router-view /></main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    return { asideVisible };
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: #ffc8db;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > li {
    > a {
      display: block;

      padding: 4px 16px;
    }
    .router-link-active {
      background: white;
    }
  }
}
main {
  overflow: auto;
}
</style>
