<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <button></button>
    <Module1 :title="title[0]" :tools="tools[0]" /> 
    <!-- looks like need to use v-bind here instead -->
    <Module1 :title="title[1]" :tools="tools[1]" />
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
      title: ["Installed CLI Plugins", "Ecosystem"],
      tools: [
        ["babel", "router", "vuex", "eslint"],
        ["vue-router", "vuex", "vue-devtools", "vue-loader", "awesome-vue"],
      ],
    };
  },
  methods: {
    // methods go here
    showOther() {
      // plan: method called when btn clicked. Btn by default says "show ecosystem", while component by default shows "Installed CLI Plugins"
      // when clicked, btn text switches, and passed in title and tools change from 0 to 1, and vice versa.
    },
  },
  computed: {
    // computed items
    buttonShow() {
      return "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/Modules.css" scoped></style>
