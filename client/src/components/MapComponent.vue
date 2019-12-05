<template lang="html">

  <div id="mapid">
    <LMap
    @click="mapClick"
    :zoom=5.5
    :center="[58.25, -4]">
    <LTileLayer :url="'http://{s}.tile.osm.org/{z}/{x}/{y}.png'"></LTileLayer>
    <LCircle
    v-for="island in islands"
    :lat-lng="[island.lat, island.long]"
    :radius="2500"
    @click="islandSelected(island)">
    <LPopup>{{island.name}}</LPopup>
  </LCircle>
</LMap>
</div>

</template>

<script>
import {LMap, LTileLayer, LMarker, LCircle, LPopup } from 'vue2-leaflet';
import {eventBus} from "../main.js"

export default {
  name: 'map-component',
  props: ['islands'],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle,
    LPopup
  },

  mounted() {
  },

  methods: {
    mapClick(){
      console.log("map is clicked");
    },
    islandSelected(island) {
      eventBus.$emit("island-selected", island);
    }
  }

}


</script>


<style lang="css" scoped>

#mapid {
  height: 37rem;
  width: 420px;
  margin: 1rem;
}

.leaflet-container {
  cursor: default !important;
}

</style>
