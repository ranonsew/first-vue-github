<template>
  <div class="home">
    <HelloWorld msg="Logo is replaced, crab rave" />
    <!-- don't use v-bind here, only for arrays it seems? -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped></style>