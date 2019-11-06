<template>

  <div class="body-wrapper">
    <div class="nav-wrapper">
      <button class="nav-item" id="homelink" @click="homeClick">Islandhopper</button>
      <button class="nav-item" id="quizlink" @click="quizClick">Which island are you?</button>
      <button class="nav-item" id="areachartlink" @click="areaChartClick">Island sizes</button>
      <button class="nav-item" id="populationchartlink" @click="populationChartClick">Island populations</button>
    </div>
    <div class="main-container">
      <div class="home" :selectedView="selectedView" v-if="selectedView === 'home'">
        <island-map :islands="islands"></island-map>
        <welcome-guide :selectedIsland="selectedIsland" v-if="!selectedIsland"></welcome-guide>
        <island-details :selectedIsland="selectedIsland" v-if="selectedIsland"></island-details>
      </div>
      <div class="quiz" :selectedView="selectedView" v-if="selectedView === 'quiz'">
        <quiz :questions="questions" :islands="islands" :selectedIsland="selectedIsland"></quiz>
      </div>
      <div class="chart" :selectedView="selectedView" v-if="selectedView === 'a-chart'">
        <area-chart :areas="areas"></area-chart>
      </div>
      <div class="chart" :selectedView="selectedView" v-if="selectedView === 'p-chart'">
        <population-chart :populations="populations"></population-chart>
      </div>
    </div>
  </div>
</template>

<script>
import MapComponent from "./components/MapComponent.vue";
import WelcomeGuide from "./components/WelcomeGuide.vue";
import IslandDetails from "./components/IslandDetails.vue";
import AreaChart from "./components/AreaChart.vue";
import PopulationChart from "./components/PopulationChart.vue";
import IslandRegionsList from "./components/IslandRegionsList.vue";
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
      selectedView: "home",
      areas: [
        ["Island", "Area"]
      ],
      populations: [
        ["Island", "Population"]
      ],
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
  },

  methods: {
    fetchData(){
      IslandService.getIslands()
      .then(islands => {
        this.islands = islands
        eventBus.$emit("islands-loaded")
        this.addAreas()
        this.addPopulations()
      });
    },

    addAreas(){
      this.islands.forEach((island) => {
        // console.log(island.name);
        this.areas.push([island.name, island.area])
      });
    },

    addPopulations(){
      const sortedByPopulation = this.islands.sort((island1, island2)=>{
        return island2.population - island1.population
      })
      // console.log("islands sorted: ", sortedByPopulation);
      sortedByPopulation.forEach((island) => {
        // console.log(island.name);
        this.populations.push([island.name, island.population])
      });
      // const tempArray = [];
      // this.islands.forEach((island) => {
      //   tempArray.push([island.name, island.population])
      // });
      // // console.log(tempArray);
      // tempArray.sort((a, b) => parseFloat(a.population) - parseFloat(b.population));
      // console.log(tempArray);
      // this.populations.concat(tempArray);
    },

    homeClick(){
      this.selectedView = "home";
    },

    quizClick(){
      this.selectedView = "quiz";
    },

    fetchQuestions(){
      QuizServices.getQuestions()
      .then(questions => {
        this.questions = questions
        eventBus.$emit("questions-loaded")
      })},

    areaChartClick(){
      this.selectedView = "a-chart";
    },

    populationChartClick(){
      this.selectedView = "p-chart";
    }
  },

  components: {
    'islands-in-region-list': IslandRegionsList,
    'welcome-guide': WelcomeGuide,
    'island-map': MapComponent,
    'island-details': IslandDetails,
    'area-chart': AreaChart,
    'population-chart': PopulationChart,
    'quiz': WhatIslandQuiz
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
  margin-left: 0.63rem;
}

.nav-item {
  /* width: 18rem;
  height: 4rem; */
  font-size: 2rem;
  font-weight: bold;
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

.home {
  display: flex;
  flex-direction: row;
}

island-map {
  width: 420px;
}

.chart {
  width: 1500px;
  height: 300px;
}

</style>
