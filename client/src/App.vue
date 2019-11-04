<template>

  <div>

    <h1>Islands Of Scotland</h1>

    <div class="main-container">

      <island-map></island-map>
      <islands-in-region-list :regions="selectedRegion"> </islands-in-region-list>
      <island-details :island="selectedIsland"> </island-details>

    </div>

  </div>

</template>

<script>
import MapComponent from "./components/MapComponent.vue";
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
    selectedIsland: ""
  };
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
        .then(islands => this.islands = islands);
  }
},

components: {
  'islands-in-region-list': IslandRegionsList,
  'island-details': IslandDetails,
  'island-map': MapComponent
}

}

</script>

<style>

</style>
