<template lang="html">
  <div v-if="island">

    <h2>{{ island.name }}</h2>
    <h3>{{ island.population }}</h3>

    <p>{{ island.information }}</p>

  </div>
</template>

<script>
export default {
  name: 'island-detail',
  props: ["island"]
};
</script>

<style lang="css" scoped>
</style>
