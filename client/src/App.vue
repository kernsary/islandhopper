<template>

  <div>

    <h1>Islands Of Scotland...Bitch</h1>

    <div class="main-container">

      <map></map>
      <islands-in-region-list :regions="selectedRegion"> </islands-in-region-list>
      <island-details :island="selectedIsland"> </island-details>

    </div>

  </div>

</template>

<script>
import MapComponent from "./components/MapComponent.vue";
import IslandRegions from "./components/IslandRegions.vue";
import IslandDetails from "./components/IslandFDetails.vue";
import { eventBus } from "./main.js";

export default {
  name: 'app',
  data(){
    islands: [],
    selectedRegion: "",
    selectedIsland: ""
  };
},
mounted(){
  eventBus.$on("region-selected", (region) => {
    this.selectedRegion = region;
    console.log("selectedRegion", this.selectedRegion);
  })

  eventBus.$on("island-selected", (island) => {
    this.selectedIsland = island;
    console.log("selectedIsland", this.selectedIsland);
  });

  fetch("../")
  .then(data => data.json())
  .then(islands => this.islands = islands)
}
</script>

<style>

</style>
