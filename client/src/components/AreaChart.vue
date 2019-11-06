<template lang="html">
  <div class="">
    <h1 class="chart-heading">Sizes of islands, in hectares</h1>
    <GChart
    type="BarChart"
    :data="areaData"
    :options="chartOptions"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: "area-chart",
  data() {
    return {
      areaData: this.areas,
      chartOptions: {
        height: 2000,
        width: 1200,
        legend: 'top',
        chartArea: {'top': 20}
      }
    }
  },
  props: ["areas"],
  components: {
    GChart
  }
}
</script>

<style lang="css" scoped>

.chart-heading {
margin-left: 1rem;
margin-bottom: 0rem;
}

</style>
