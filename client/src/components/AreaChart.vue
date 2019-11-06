<template lang="html">
  <GChart
  type="BarChart"
  :data="areaData"
  />
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: "area-chart",
  data() {
    return {
      areaData: this.areas
      // chartOptions: {
      //     height: 2000,
      //     width: 1500,
      //   }
    }
  },
  props: ["areas"],
  components: {
    GChart
  }
}
</script>

<style lang="css" scoped>
</style>
