import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Button from "./views/Button.vue";
import Switch from "./views/Switch.vue";
import Dialog from "./views/Dialog.vue";
import Tabs from "./views/Tabs.vue";
import DocDemo from "./views/DocDemo.vue";
import Intro from "./views/Intro.vue";
import Started from "./views/Started.vue";
import Install from "./views/Install.vue";
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo },
        { path: "intro", component: Intro },
        { path: "started", component: Started },
        { path: "install", component: Install },
        { path: "button", component: Button },
        { path: "switch", component: Switch },
        { path: "dialog", component: Dialog },
        { path: "tabs", component: Tabs },
      ],
    },
  ],
});

router.afterEach(() => {
  console.log("路由切换了");
});
