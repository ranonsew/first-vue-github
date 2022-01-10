<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <strong>Default text:</strong> For a guide and recipes on how to configure
      / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <button class="btn btn-rounded bg-primary text-white" @click="showOther">
      Show {{ btnText }}
    </button>
    <Module1 class="container-md" :title="shownTitle" :tools="shownTools" />
    <!--need to use v-bind here because passing in arrays/objects-->
    <!-- unnecessary to v-bind if just passing in str or num -->
  </div>
</template>

<script>
import Module1 from "./Module1.vue";
import { ref, computed } from "vue";

export default {
  name: "HelloWorld",
  components: { Module1 },
  props: ["msg"],
  setup() {
    const titles = ["Installed CLI Plugins", "Ecosystem"];
    const tools = [
      ["babel", "router", "vuex", "eslint"],
      ["vue-router", "vuex", "vue-devtools", "vue-loader", "awesome-vue"],
    ];

    const btnText = ref("Ecosystem");
    const showTitle = ref("Installed CLI Plugins");

    const showOther = () => {
      if (btnText.value == "Ecosystem") btnText.value = "Installed CLI Plugins";
      else btnText.value = "Ecosystem";
    };

    const shownTitle = computed(() =>
      btnText.value == "Ecosystem" ? titles[0] : titles[1]
    );

    const shownTools = computed(() =>
      btnText.value == "Ecosystem" ? tools[1] : tools[0]
    );

    return { btnText, showTitle, showOther, shownTitle, shownTools };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/Modules.css" scoped></style>
<!-- <style src="../assets/Buttons.css" scoped></style> -->
