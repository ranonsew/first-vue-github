<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <module-1 />
    <module-2 />
  </div>
</template>

<script>
import Module1 from "./Module1.vue";
import Module2 from "./Module-2.vue";

export default {
  components: { 
    Module1,
    Module2,
  },
  name: "HelloWorld",
  props: {
    msg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
