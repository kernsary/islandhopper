<template lang="html">

<div id="mapid">
  <LMap ref="myMap">
      </LMap>
</div>

</template>

<script>
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'map-component',
  props: ['islands'],
  components: {
        LMap,
        LTileLayer,
        LMarker
    },

  mounted() {
    this.myMap = L.map('mapid').setView([58, -4], 6);


  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFkbWlrZTcxNiIsImEiOiJjazJrOWN4N2IwMzk5M21udDRzanZvNnFuIn0.q-CVhpCwm3WYFcsh-xlIVw'
}).addTo(this.myMap);

  L.circle([57.267, -7.317], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 2500
}).addTo(this.myMap);

  }

}

// const mymap = L.map('mapid').setView([51.505, -0.09], 13);
//
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
// 	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// 	maxZoom: 18,
// 	id: 'mapbox.streets',
// 	accessToken: 'pk.eyJ1IjoibWFkbWlrZTcxNiIsImEiOiJjazJrOWN4N2IwMzk5M21udDRzanZvNnFuIn0.q-CVhpCwm3WYFcsh-xlIVw'
// }).addTo(mymap);


</script>


<style lang="css" scoped>

#mapid {
  height: 700px;
  width: 450px;
}

</style>
