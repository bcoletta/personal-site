<template>
  <div id="monthly-chart">
    <BarChart :chartData="chartData" :options="options"/>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart';

export default {
  name: 'MoviesByMonth',
  components: { BarChart },
  props: [ 'monthlyStats' ],
  data() {
    return {
      options: {
        responsive: false,
        aspectRatio: 3,
        maintainAspectRatio: false,
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
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        datasets: [
          {
            label: 'Monthly Movies Watched',
            backgroundColor: 'blue',
            data: this.totals,
          },
        ],
      };
    },
    months() {
      if (!this.monthlyStats) return [];
      let months = [];
      for (let i = 0; i < 12; i++) {
        months.push(this.monthlyStats[i] || 0);
      }
      return months;
    },
    totals() {
      return this.months.map(month => {
        return month === 0 ? month : month.total;
      });
    },
  },
}
</script>

<style scoped>
</style>