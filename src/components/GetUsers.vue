<template>
  <div class="user-list">
    <h2>{{ msg }}</h2>
    <Module2 />
  </div>
</template>

<script>
import Module2 from "./Module2.vue";

export default {
  name: "GetUsers",
  components: { Module2 }, 
  // components, not component. "s" is super important but it doesn't get caught as an error
  data() {
    return {
      msg: "Users here",
    };
  },
};
</script>

<style scoped>
.user-list {
  margin: 5rem;
}
</style>
