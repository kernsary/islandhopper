<template lang="html">
  <div>

    <ul>
      <liv-for="(island, index) in region" :island="island" :key="index"> </li>
    </ul>

  </div>

</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'islands-in-region-list',
  props: ['region'],
  components: {
    "list-item": ListItem
  }
}
</script>

<style lang="css" scoped>
</style>
