import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import frank from "./components/frank.vue";
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [{ path: "/", component: HelloWorld }],
  routes: [{ path: "/xxx", component: frank }],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
