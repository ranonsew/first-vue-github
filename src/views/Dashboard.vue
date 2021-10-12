<template>
  <h1>The sidebar is {{ collapsed ? "closed" : "open" }}</h1>
  <button class="btn btn-rounded bg-blue" @click="toggleSidebar">
    Toggle Sidebar
  </button>
  <br /><br />
  <!-- component tag necessary, with v-bind is -->
  <!-- current simplest way to implement -->
  <button @click="currentComponent = 'fluxCounter'">fluxCounter</button>
  <button @click="currentComponent = 'Module3'">Module3</button>
  <button @click="changeComponent">Switch</button>
  <hr />
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
  <!-- <fluxCounter /> -->
</template>

<script>
// I want to add dynamic component here, to test various components out
// so I can test module3, helloi18n, flux-counter, etc
import {
  collapsed,
  toggleSidebar,
} from "@/components/Navigation/sidebarState.js";

import fluxCounter from "@/components/fluxCounter.vue";
import Module3 from "@/components/Module3.vue";

export default {
  components: {
    fluxCounter,
    Module3,
  },
  data() {
    return {
      // can be a string, but I'm gonna keep it consistent
      currentComponent: "fluxCounter",
      availableComponents: ["fluxCounter", "Module3"],
    };
  },
  methods: {
    changeComponent() {
      let len = this.availableComponents.length;
      let currentIndex = this.availableComponents.indexOf(
        this.currentComponent
      );
      currentIndex = currentIndex == len - 1 ? 0 : currentIndex + 1;
      this.currentComponent = this.availableComponents[currentIndex];
    },
  },
  setup() {
    return { collapsed, toggleSidebar };
  },
};
</script>

<style src="../assets/Buttons.css" scoped></style>
