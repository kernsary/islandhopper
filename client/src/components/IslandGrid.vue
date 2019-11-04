<template lang="html">
  <div id="islandGrid">
		<div class="island" v-for="island in islands">
			<h1>Region: {{ island.region }}</h1>
      <h3>Name: {{island.name}}</h3>
			<p>Area: {{ island.area }}</p>
			<p>Population: {{ island.population }}</p>
			<p>Facts: {{ island.information }}</p>
		</div>
	</div>
</template>

<script>
import IslandService from '../services/IslandService'
export default {

name: "island-grid",
props: ["islands"],
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
