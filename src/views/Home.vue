<template>
  <div class="home">
    <!--some day will replace with component header-->
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Replace logo with header at some point" />
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