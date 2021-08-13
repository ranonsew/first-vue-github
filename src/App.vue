<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/Navigation/Sidebar.vue";
import { sidebarWidth } from "@/components/Navigation/sidebarState.js";
export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
}
</script>

<style>
#app {
  /* styling for the base html */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
