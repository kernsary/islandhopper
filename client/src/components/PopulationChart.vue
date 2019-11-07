<template lang="html">
  <div class="">
      <h1 class="chart-heading">Populations of islands</h1>
    <GChart
    type="BarChart"
    :data="populationData"
    :options="chartOptions"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: "population-chart",
  data() {
    return {
      populationData: this.populations,
      chartOptions: {
        height: 2000,
        width: 1200,
        legend: 'top',
        chartArea: {'top': 20}
      }
    }
  },
  props: ["populations"],
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
