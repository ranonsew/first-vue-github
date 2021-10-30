<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <!-- if not collapsed, passed in text is shown -->
      <span v-if="!collapsed">
        <!-- the pass in data appears in slot -->
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./sidebarState.js";

export default {
  name: "SidebarLinks",
  props: {
    to: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // composition api, passing in props to use them in inside
    const route = useRoute();
    // composition api, retrieving route of the current component
    const isActive = computed(() => route.path === props.to);
    // isActive is true where route path is the same as the routerlink hovered over (based on props.to)
    return { isActive, collapsed };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  /* tooltips also :3 */
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin: 0.1em 0;
  padding: 1.2rem 0.4rem;
  border-radius: 0.25em;
  height: 1.5em;
  color: white;
  text-decoration: none;
}
.link:hover {
  background-color: var(--color-light-blue);
}
.link.active {
  background-color: var(--color-dark-blue);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>
