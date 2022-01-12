<template>
  <BarChart :chartData="chartData" :options="options" />
</template>

<script>
import BarChart from '@/components/BarChart';
export default {
  name: 'MoviesByYear',
  props: [ 'years' ],
  components: { BarChart },
  data() {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
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
            label: 'Total Movies Watched',
            backgroundColor: 'blue',
            data: this.totals,
          },
        ],
      };
    },
    labels() {
      if (!this.years) return [];
      return this.years.map(yr => yr.year);
    },
    totals() {
      if (!this.years) return [];
      return this.years.map(yr => yr.total)
    },
  },
}
</script>

<style scoped>

</style>