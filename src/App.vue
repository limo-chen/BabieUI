<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    导航栏
    <router-link to="/">hello</router-link>
    <router-link to="/xxx">frank</router-link>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
