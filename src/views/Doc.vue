<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="asideVisible">
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
      <main>主要内容</main>
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
aside {
  background: #539bf4;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  > h2 {
    margin-bottom: 12px;
  }

  > li {
    padding: 4px 0;
  }
}
</style>
