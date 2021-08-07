<template>
  <div class="fetch-user">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "Module2",
  data() {
    return {
      msg: "fetching user data here",
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fetch-user {
  margin: 2rem;
}
</style>
