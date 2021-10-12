<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <!-- if not collapsed, passed in text is shown -->
      <span v-if="!collapsed">
        <!-- the pass in data appears in slot -->
        <slot />
      </span>
      <!-- tooltip currently causing some small issues with the loading, 
        need to get it right for now -->
      <!-- <span v-else :title="title" class="link tooltip right"></span> -->
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
.link,
.link.tooltip {
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

/* tool tip not working yet :( */
/* .tooltip:before {
  position: absolute;
  z-index: 2;
  display: none;
  width: 200px;
  max-width: 200px;
  padding: 10px;
  font-size: 0.8em;
  line-height: 1.4;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  content: attr(title);
}
.tooltip:after {
  position: absolute;
  z-index: 1;
  display: none;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  content: "";
}
.tooltip:hover:before,
.tooltip:hover:after {
  display: inline-block;
}
.right:before {
  top: 50%;
  left: calc(100% + 5px);
  transform: translateY(-50%);
}
.right:after {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  border-left-width: 0;
  border-right-color: rgba(0, 0, 0, 0.8);
} */

.link.active {
  background-color: var(--color-dark-blue);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>
