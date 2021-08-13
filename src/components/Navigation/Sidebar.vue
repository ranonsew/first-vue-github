<template>
  <div id="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>V</div>
        <div>JS</div>
      </span>
      <span v-else>Vue JS</span>
    </h1>

    <SidebarLinks to="/" icon="fas fa-home">Home</SidebarLinks>
    <SidebarLinks to="/about" icon="fas fa-image">About</SidebarLinks>
    <SidebarLinks to="/friends" icon="fas fa-users">Friends</SidebarLinks>
    <SidebarLinks to="/dashboard" icon="fas fa-columns">dashboard</SidebarLinks>

    <!--double-left does a rotate-180 when collapsed is true-->
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
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

<style> /* this here style isn't scoped, so that's why lmao */
:root {
  --sidebar-bg-color: #2f4a85;
  --sidebar-item-hover: #384ba1;
  --sidebar-item-active: #272d67;
  font-size: 16px;
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
#sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.85);
  transition: 0.2s linear;
  cursor: pointer;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
