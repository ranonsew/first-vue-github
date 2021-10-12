<template>
  <h1>Counter example section</h1>
  <div class="counter-squared">
    {{ $store.state.counter }}
    <sup>2</sup> =
    {{ $store.getters.counterSquared }}
  </div>
  <br />
  <div class="counter">
    <!-- $store.state -->
    <p>{{ $store.state.counter }}</p>
  </div>
  <div class="button-group">
    <!-- contains the info to call mutation -->
    <button @click="$store.dispatch('decrementing')">-</button>
    <!-- double method instead -->
    <button
      @click="
        $store.commit('increment');
        $store.dispatch('incrementing');
      "
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "fluxCounter",
};
</script>

<style scoped></style>
