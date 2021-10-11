<template>
  <h1>The sidebar is {{ collapsed ? "closed" : "open" }}</h1>
  <button class="btn btn-rounded bg-blue" @click="toggleSidebar">
    Toggle Sidebar
  </button>
  <br />
  <fluxCounter />
</template>

<script>
// I want to add dynamic component here, to test various components out
// so I can test module3, helloi18n, flux-counter, etc
import {
  collapsed,
  toggleSidebar,
} from "@/components/Navigation/sidebarState.js";
import fluxCounter from "@/components/fluxCounter.vue";
export default {
  components: { fluxCounter },
  setup() {
    return { collapsed, toggleSidebar };
  },
};
</script>

<style src="../assets/Buttons.css" scoped></style>
