<template>
  <div class="about">
    <h1>This is an about page</h1>
    <GetUsers />
  </div>
</template>

<script>
// @ alias to src
import GetUsers from "@/components/GetUsers.vue";

export default {
  name: "About",
  components: {
    GetUsers,
  },
};
</script>
