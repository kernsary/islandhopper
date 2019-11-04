<template lang="html">
  <div id="app">
    <island-grid :islands="islands"/>
  </div>
</template>

<script>
<<<<<<< HEAD
// import HelloWorld from './components/HelloWorld.vue'
=======

import IslandGrid from './components/IslandGrid.vue';
import IslandService from './services/IslandService.js';
>>>>>>> develop

export default {
  name: 'app',
  data() {
    return {
      islands: []
    }
  },
  components: {
    'island-grid': IslandGrid
  },
  mounted(){
    this.fetchData();
  },
  methods: {
    fetchData(){
        IslandService.getIslands()
        .then(islands => this.islands = islands);
  }
 }
}

</script>

<style>

</style>
