<template lang="html">

    <div class="welcome">
      <h3>Welcome to Islandhopper</h3>
      <img :src="`https://s0.geograph.org.uk/geophotos/04/00/94/4009416_2eaddfcb_original.jpg`">
      <p>Click on an island on the map to explore!<br><br>Or take our quiz - Which island are you?</p>
    </div>

</template>

<script>
import IslandService from '../services/IslandService'
import { eventBus } from '../main.js'
export default {

  name: "welcome-guide",

  props: ["selectedIsland"]

}
</script>


<style lang="css" scoped>

.welcome{
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
