<template lang="html">

<div id="mapid">

</div>

</template>

<script>
export default {
  name: 'map-component',
  props: ['islands'],
  components: {
    'islands-in-region-list': IslandRegionsList
  }
}

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoibWFkbWlrZTcxNiIsImEiOiJjazJrOWN4N2IwMzk5M21udDRzanZvNnFuIn0.q-CVhpCwm3WYFcsh-xlIVw'
}).addTo(mymap);


</script>


<style lang="css" scoped>

#mapid {
  height: 280px;
}

</style>
