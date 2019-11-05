<template>

  <div class="body-wrapper">
    <div class="nav-wrapper">
      <h1 class="nav-item" id="homelink">Islandhopper</h1>
      <h1 class="nav-item">Which island are you?</h1>
    </div>
    <div class="main-container">

      <island-map :islands="islands"></island-map>
      <island-grid :selectedIsland="selectedIsland" v-if="selectedIsland"></island-grid>
      <!-- <what-island-quiz></what-island-quiz> -->
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

.body-wrapper {
  display: flex;
  flex-direction: column;
  font-family: Helvetica, sans-serif;
}

.nav-wrapper {
  display: flex;
  flex-direction: row;
}

.nav-item {
  /* width: 18rem; */
  background-color: DeepSkyBlue;
  color: White;
  margin: 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem;
  border: 0px none;
  border-radius: 3%;
}

#homelink {
  background-color: Blue;
}

.main-container {
  display: flex;
  flex-direction: row;
}

island-map {
  width: 420px;
}

</style>
