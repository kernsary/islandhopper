<template lang="html">

    <div class="island">
      <h3>{{selectedIsland.name}}</h3>
      <img :src="selectedIsland.image">
      <p>{{ selectedIsland.information }}</p>
      <p>Area: {{ selectedIsland.area }} hectares</p>
      <p>Population: {{ selectedIsland.population }}</p>
    </div>

</template>

<script>
import IslandService from '../services/IslandService'
import { eventBus } from '../main.js'
export default {

  name: "island-details",

  props: ["selectedIsland"]

}
</script>


<style lang="css" scoped>

.island{
  width: 40rem;
  height: 35rem;
  background-color: DeepSkyBlue;
  color: White;
  margin: 1rem 0.5rem;
  padding: 1rem 2rem;
  border: 0px none;
  border-radius: 3%;
}

h3 {
  font-size: 2.5em;
  line-height: 0.5em;
  margin-top: 0.5em;
}

img {
  height: 20rem;
}

</style>
