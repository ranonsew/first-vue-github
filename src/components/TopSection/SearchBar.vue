<template>
  <div id="search">
    <form action="/action_page.php">
      <input
        id="searchBar"
        type="text"
        placeholder="Search..."
        name="searchQuery"
      />
      <button type="submit" class="btn searchBtn">
        <i class="fab fa-searchengin" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {},
  setup() {
    return {};
  },
};
</script>

<style scoped>
#search {
  margin: 0.25rem 4.5rem;
  height: calc(var(--header-height)-1.5rem);
}
#searchBar {
  height: 2rem;
  font-size: 17px;
}
.searchBtn {
  height: 2.4rem;
}
</style>
<style src="../../assets/Buttons.css" scoped></style>
