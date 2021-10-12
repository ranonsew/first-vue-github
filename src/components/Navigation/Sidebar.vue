<template>
  <div id="sidebar" :style="{ width: sidebarWidth }">
    <h4>
      <span
        class="collapse-icon"
        :class="{ 'rotate-180': collapsed }"
        @click="toggleSidebar"
      >
        <i class="fas fa-code" />
      </span>
      <transition name="fade">
        <span v-show="!collapsed">ProjectV</span>
      </transition>
    </h4>

    <!-- tool tip on icon? Or in sidebarlinks? -->
    <SidebarLinks to="/" icon="fas fa-home" title="Home">Home</SidebarLinks>
    <SidebarLinks to="/about" icon="fas fa-image" title="About"
      >About</SidebarLinks
    >
    <SidebarLinks to="/friends" icon="fas fa-users" title="Friends"
      >Friends</SidebarLinks
    >
    <!-- Friends is passed in text data which will display if slot is added in subcomponent -->
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
    // composition api used to initialize imported components more easily
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style scoped>
/* sidebar */
#sidebar {
  color: white;
  background-color: var(--color-blue);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5rem;
  transition: var(--sb-transition-speed) ease;
  display: flex;
  flex-direction: column;
}
#sidebar h3,
h4 {
  height: 4rem;
}

/* collapsing icon */
.collapse-icon {
  position: absolute;
  top: 1.65rem;
  left: -0.34rem;
  padding: 0 0.75em;
  /* color: var(--color-offwhite); */
  color: white;
  transition: var(--sb-transition-speed) linear;
  cursor: pointer;
}
.rotate-180 {
  transform: rotate(360deg);
  transition: var(--sb-transition-speed) linear;
}

/* fading effect */
.fade-enter-active {
  transition: opacity var(--sb-transition-speed) ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-enter-from, /* this cunt was the culprit, v3 changed it to need -enter-from and not just -enter */
.fade-leave-to {
  opacity: 0;
}
</style>
