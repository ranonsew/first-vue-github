<template>
  <div id="header">
    <!-- logo goes here probably -->
    <img alt="Vue logo" src="../../assets/logo.png" />
    <!-- search component here -->
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  components: {},
  setup() {
    return {};
  },
};
</script>

<style scoped>
#header {
  color: white;
  background-color: var(--color-active-blue);
  float: top;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  transition: 0.3s ease;
  display: flex;
  flex-direction: row;
  height: var(--header-height);
}
#header img {
  margin-left: 1.25em;
}
</style>
