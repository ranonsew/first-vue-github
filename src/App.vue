<template>
  <!-- <Header /> -->
  <!-- <Sidebar :style="{ 'margin-top': 'calc(var(--header-height) + 1rem)' }" /> -->
  <Header />
  <Sidebar />
  <div
    :style="{
      'margin-left': sidebarWidth,
      'margin-top': 'calc(var(--header-height) + 1.5rem)',
    }"
  >
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/TopSection/Header.vue";
import Sidebar from "@/components/Navigation/Sidebar.vue";
import { sidebarWidth } from "@/components/Navigation/sidebarState.js";
// header component to import here
export default {
  components: { Header, Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
:root {
  /* --color-hover-blue: #384ba1; */
  font-size: 16px;
  --color-blue: #2f4a85;
  --color-light-blue: #428db9;
  --color-dark-blue: #272d67;
  --color-darker-blue: #1b2050;
  --color-offwhite: rgba(255, 255, 255, 0.85);
  --header-height: 3rem;
  --sb-transition-speed: 0.3s;
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
