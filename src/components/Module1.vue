<template>
  <h3>{{ title }}</h3>
  <ul>
    <li v-for="tool in tools" :key="tool">{{ tool }}</li>
  </ul>
</template>

<script>
export default {
  name: "Module1",
  props: {
    title: {
      type: String,
      required: true,
    },
    tools: {
      type: Array,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/Modules.css" scoped></style>
