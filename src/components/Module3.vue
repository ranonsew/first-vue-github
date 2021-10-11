<template>
  <label for="locale">locale</label>
  <select v-model="$i18n.locale">
    <option>en</option>
    <option>cn</option>
    <option>jp</option>
  </select>
  <p>message: {{ $t("welcome") }}</p>
</template>

<script>
export default {
  name: "Module3",
};
</script>

<i18n>
{
  "en": {
    "welcome": "Hello Everyone!"
  },
  "jp": {
    "welcome": "こんにちは、みんな!"
  },
  "cn": {
    "welcome": "大家好!"
  }
}
</i18n>
