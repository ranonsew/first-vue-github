<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <GetUsers />
</template>

<script>
import GetUsers from "@/components/GetUsers.vue";
export default {
  name: "About",
  components: {
    GetUsers,
  },
};
</script>

<style scoped></style>
