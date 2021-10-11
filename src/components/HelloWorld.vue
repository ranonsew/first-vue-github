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
    <button class="btn btn-rounded bg-blue" @click="showOther">
      Show {{ btnText }}
    </button>
    <Module1 :title="shownTitle" :tools="shownTools" />
    <!--need to use v-bind here because passing in arrays/objects-->
    <!-- unnecessary to v-bind if just passing in str or num -->
  </div>
</template>

<script>
import Module1 from "./Module1.vue";

export default {
  name: "HelloWorld",
  components: { Module1 },
  props: {
    msg: String,
  },
  data() {
    return {
      titles: ["Installed CLI Plugins", "Ecosystem"],
      tools: [
        ["babel", "router", "vuex", "eslint"],
        ["vue-router", "vuex", "vue-devtools", "vue-loader", "awesome-vue"],
      ],
      btnText: "Ecosystem",
      showTitle: "Installed CLI Plugins",
    };
  },
  methods: {
    // methods go here
    showOther() {
      // plan: method called when btn clicked. Btn by default says "show ecosystem", while component by default shows "Installed CLI Plugins"
      // when clicked, btn text switches, and passed in title and tools change from 0 to 1, and vice versa.
      if (this.btnText == "Ecosystem") {
        this.btnText = "Installed CLI Plugins";
        // this.showTitle = "Ecosystem";
      } else {
        this.btnText = "Ecosystem";
        // this.showTitle = "Installed CLI Plugins";
      }
    },
  },
  computed: {
    // computed items
    shownTitle() {
      // if (this.btnText == "Ecosystem") {
      //   return this.titles[0];
      // } else {
      //   return this.titles[1];
      // }
      // using ternary conditional operator because it is cleaner looking
      return this.btnText == "Ecosystem" ? this.titles[0] : this.titles[1];
    },
    shownTools() {
      // if (this.btnText == "Ecosystem") {
      //   return this.tools[0];
      // } else {
      //   return this.tools[1];
      // }
      // ternary conditional operator is a lot cleaner looking
      return this.btnText == "Ecosystem" ? this.tools[1] : this.tools[0];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/Modules.css" scoped></style>
<style src="../assets/Buttons.css" scoped></style>
