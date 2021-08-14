<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/Navigation/Sidebar.vue";
import { sidebarWidth } from "@/components/Navigation/sidebarState.js";
// header component to import here
export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
:root {
  /* --color-hover-blue: #384ba1; */
  --color-blue: #2f4a85;
  --color-hover-blue: #428db9;
  --color-active-blue: #272d67;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}
#app {
  /* styling for the base html */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
