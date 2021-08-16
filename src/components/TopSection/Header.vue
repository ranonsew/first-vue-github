<template>
  <div id="header">
    <!-- logo goes here probably -->
    <img alt="Vue logo" src="../../assets/logo.png" />
    <!-- search component here -->
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  name: "Header",
  props: {},
  components: { SearchBar },
  setup() {
    return {};
  },
};
</script>

<style scoped>
#header {
  color: white;
  background-color: var(--color-dark-blue);
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
  /* justify-content: space-between; */
  /* align-items: center; */
}
#header img {
  margin-left: 5rem;
}
</style>
