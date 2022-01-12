<template>
  <BarChart :chartData="chartData" :options="options" />
</template>

<script>
import BarChart from '@/components/BarChart';
export default {
  name: 'AveragesByYear',
  props: [ 'years' ],
  components: { BarChart },
  data() {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 5,
                max: 10,
              },
            },
          ],
        },
      },
    }
  },
  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'Average Entertainment Score',
            backgroundColor: 'yellow',
            data: this.eTotals,
          },
          {
            label: 'Average Story Score',
            backgroundColor: 'red',
            data: this.sTotals,
          },
        ],
      };
    },
    labels() {
      if (!this.years) return [];
      return this.years.map(yr => yr.year);
    },
    eTotals() {
      if (!this.years) return [];
      return this.years.map(yr => yr['avg_e']);
    },
    sTotals() {
      if (!this.years) return [];
      return this.years.map(yr => yr['avg_s']);
    },
  },
}
</script>

<style scoped>

</style>