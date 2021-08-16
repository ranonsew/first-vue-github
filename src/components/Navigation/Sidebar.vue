<template>
  <div id="sidebar" :style="{ width: sidebarWidth }">
    <h3>
      <span
        class="collapse-icon"
        :class="{ 'rotate-180': collapsed }"
        @click="toggleSidebar"
      >
        <i class="fas fa-code" />
      </span>
      <span v-if="!collapsed">ProjectV</span>
    </h3>

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
  --transition-speed: 0.3s;
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
  transition: var(--transition-speed) ease;
  display: flex;
  flex-direction: column;
}
#sidebar h3 {
  height: 7rem;
}

.collapse-icon {
  position: absolute;
  top: 1.5rem;
  left: 0.25rem;
  padding: 0 0.75em;
  /* color: var(--color-offwhite); */
  color: white;
  transition: var(--transition-speed) linear;
  cursor: pointer;
}
.rotate-180 {
  transform: rotate(360deg);
  transition: var(--transition-speed) linear;
}

/* incomplete stuff that may or may not be reintroduced later */
/* .line-1::before,
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
  } */
</style>
