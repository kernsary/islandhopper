<template lang="html">

  <option @click="handleClick">{{ island.name }}</option>

</template>

<script>
import { eventBus } from "../main.js";

export default {
  name: 'list-item',
  props: ['islands'],
  methods: {
    handleClick(){
      eventBus.$emit("island-selected", this.island)
    }
  }
}
</script>

<style lang="css" scoped>

</style>
