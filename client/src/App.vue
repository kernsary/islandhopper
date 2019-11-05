<template>

  <div class="body-wrapper">
    <div class="nav-wrapper">
      <h1>Islandhopper</h1>
      <h1>Which island are you?</h1>
    </div>
    <div class="main-container">

      <island-map :islands="islands"></island-map>
      <island-grid :selectedIsland="selectedIsland" v-if="selectedIsland"></island-grid>
      <quiz></quiz>

    </div>

  </div>

</template>

<script>
import MapComponent from "./components/MapComponent.vue";
import IslandGrid from "./components/IslandGrid.vue";
import IslandRegionsList from "./components/IslandRegionsList.vue";
import IslandDetails from "./components/IslandDetails.vue";
import WhatIslandQuiz from "./components/WhatIslandQuiz.vue";
import IslandService from './services/IslandService.js';
import QuizServices from './services/QuizServices.js';
import { eventBus } from "./main.js";

export default {
  name: 'app',
  data(){
    return {
      islands: [],
      selectedRegion: "",
      selectedIsland: false,
      questions: []
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


    this.fetchData(),

    this.fetchQuestions()
    console.log(fetchQuestions);
  },

  methods: {
    fetchData(){
      IslandService.getIslands()
      .then(islands => {
        this.islands = islands
        eventBus.$emit("islands-loaded")
      });
    },

    fetchQuestions(){
      QuizServices.getQuestions()
      .then(questions => {
        this.questions = questions
        eventBus.$emit("questions-loaded")
      });
    }
  },

  components: {
    'islands-in-region-list': IslandRegionsList,
    'island-details': IslandDetails,
    'island-map': MapComponent,
    'island-grid': IslandGrid,
    'quiz': WhatIslandQuiz
  }

}

</script>

<style>

.body-wrapper {
  display: flex;
  flex-direction: column;
}

.nav-wrapper {
  display: flex;
  flex-direction: row;
}

.main-container {
  display: flex;
  flex-direction: row;
}

</style>
