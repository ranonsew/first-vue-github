<template>
  <div id="sidebar" :style="{ width: sidebarWidth }">
    <h2>
      <span
        class="collapse-icon"
        :class="{ 'rotate-180': collapsed}"
        @click="toggleSidebar"
      >
        <i class="fas fa-angle-double-left" />
      </span>
      <transition name="fade">
        <span :key="1" v-if="!collapsed" class="">Vue</span>
      </transition>
    </h2>

    <!-- tool tip on icon? Or in sidebarlinks? -->
    <SidebarLinks to="/" icon="fas fa-home" title="Home">Home</SidebarLinks>
    <SidebarLinks to="/about" icon="fas fa-image" title="About"
      >About</SidebarLinks
    >
    <SidebarLinks to="/friends" icon="fas fa-users" title="Friends"
      >Friends</SidebarLinks
    >
    <SidebarLinks to="/dashboard" icon="fas fa-columns" title="Dashboard"
      >Dashboard</SidebarLinks
    >
  </div>
</template>

<script>
import SidebarLinks from "./SidebarLinks.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./sidebarState.js";

export default {
  name: "Sidebar",
  components: { SidebarLinks },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style>
/* this here style isn't scoped, so that's why lmao */
:root {
  /* --sidebar-bg-color: #2f4a85;
  --sidebar-item-hover: #384ba1;
  --sidebar-item-active: #272d67;
  font-size: 16px; */
  --sidebar-bg-color: var(--color-blue);
  --sidebar-item-hover: var(--color-hover-blue);
  --sidebar-item-active: var(--color-active-blue);
  /* unsure if I should just rename the lower variables lmao */
}
</style>

<style scoped>
#sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
#sidebar h2 {
  height: 2.5em;
}
.line-1::before,
.line-1::after {
  content: "";
  background-color: var(--color-offwhite);
  display: block;
  height: 0.3rem;
  width: 100%;
}
.line-0::before,
.line-0::after {
  content: "";
  background-color: var(--color-offwhite);
  display: block;
  height: 0.3rem;
  width: 100%;
  opacity: 0;
}

.collapse-icon {
  position: absolute;
  /* top: 0; */
  left: 0;
  padding: 0 0.75em;
  /* color: var(--color-offwhite); */
  color: white;
  transition: 0.2s linear;
  cursor: pointer;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.fade-enter-active {
  transition: opacity 3s ease-out;
}
.fade-leave-active {
  transition: all 0.15s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
