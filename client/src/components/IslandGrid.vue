<template lang="html">
  <div id="islandGrid">

		<div class="island">
      <h3>{{selectedIsland.name}}</h3>
      <img :src="selectedIsland.image">
      <p>{{ selectedIsland.information }}</p>
			<p>Area: {{ selectedIsland.area }} hectares</p>
			<p>Population: {{ selectedIsland.population }}</p>
		</div>

	</div>
</template>

<script>
import IslandService from '../services/IslandService'
import { eventBus } from '../main.js'
export default {

name: "island-grid",
data(){
  return{

  }
},
props: ["selectedIsland"],
filters: {
  format(value){
    return new Date(value).toLocaleString().substring(0, 10);
  }
}

}
</script>


<style lang="css" scoped>

  .island{
   color: black;
   border: 10px double #1C6EA4;
   border-radius: 40px 0px 40px 0px;
  }

</style>
