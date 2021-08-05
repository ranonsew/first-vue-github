<template>
  <div class="user-list">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "GetUsers",
  data() {
    return {
      msg: "Users here",
    }
  },
};
</script>

<style scoped>
.user-list {
  margin: 5rem;
}
</style>
