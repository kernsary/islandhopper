<template>

  <div>

    <h1>Islands Of Scotland</h1>

    <div class="main-container">

      <island-map :islands="islands"></island-map>
      <island-grid :selectedIsland="selectedIsland" v-if="selectedIsland"></island-grid>
      <!-- <what-island-quiz></what-island-quiz> -->
      <!-- <islands-in-region-list :regions="selectedRegion"> </islands-in-region-list>
      <island-details :island="selectedIsland"> </island-details> -->

    </div>

  </div>

</template>

<script>
// import WhatIslandQuiz from './components/WhatIslandQuiz.vue';
import MapComponent from "./components/MapComponent.vue";
import IslandGrid from "./components/IslandGrid.vue";
import IslandRegionsList from "./components/IslandRegionsList.vue";
import IslandDetails from "./components/IslandDetails.vue";
import IslandService from './services/IslandService.js';
import { eventBus } from "./main.js";

export default {
  name: 'app',
  data(){
    return {
    islands: [],
    selectedRegion: "",
    selectedIsland: false
  }
},
mounted(){
  eventBus.$on("region-selected", (region) => {
    this.selectedRegion = region;
    console.log("selectedRegion", this.selectedRegion);
  }),

  eventBus.$on("island-selected", (island) => {
    this.selectedIsland = island;
    console.log("selectedIsland", this.selectedIsland);
  }),


    this.fetchData()
  },

  methods: {
    fetchData(){
        IslandService.getIslands()
        .then(islands => {
          this.islands = islands
          eventBus.$emit("islands-loaded")
        });
  }
},

components: {
  'islands-in-region-list': IslandRegionsList,
  'island-details': IslandDetails,
  'island-map': MapComponent,
  'island-grid': IslandGrid,
  // 'what-island-quiz': WhatIslandQuiz
}

}

</script>

<style>

</style>
