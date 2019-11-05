<template lang="html">
  <GChart
  type="BarChart"
  :data="populationData"
  />
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: "population-chart",
  data() {
    return {
      populationData: this.populations
      // chartOptions: {
      //   chart: {
      //     // title: 'Company Performance',
      //     // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      //     height: 2000
      //   }
      // }
    }
  },
  props: ["populations"],
  components: {
    GChart
  }
}
</script>

<style lang="css" scoped>
</style>
