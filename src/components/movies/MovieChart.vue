<template>
  <BubbleChart v-if="chartData && options" :chartData="chartData" :options="options"/>
</template>

<script>
import BubbleChart from '@/components/BubbleChart';

export default {
  name: 'MovieChart',
  components: { BubbleChart },
  props: [ 'movies' ],
  data() {
    return {
      points: [],
      chart: null,
      chartData: null,
      options: null,
    };
  },
  methods: {
    initChart() {
      this.getPoints().then(() => {
        this.chartData = {
          labels: [ 'Data' ],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: 'orange',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: this.points,
            },
          ],
        };
        this.options = {
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Entertainment',
                },
                ticks: {
                  min: 0,
                  max: 10,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Story',
                },
                ticks: {
                  min: 0,
                  max: 10,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
              label: tooltipItem => {
                return this.points[tooltipItem.index].titles;
              },
            },
          },
          responsive: true,
          maintainAspectRatio: true,
        }
      });
    },
    getPoints() {
      let promises = [];
      this.points = [];

      this.movies.forEach(rating => {
        let promise = new Promise(resolve => {
          let z = {};
          z.titles = [ rating.title ];
          z.r = 5;
          z.x = rating.s;
          z.y = rating.e;

          let p = this.points.find(point => {
            return parseFloat(point.x) === parseFloat(z.x) && parseFloat(point.y) === parseFloat(z.y);
          });

          if (!p) {
            z.label = z.titles.join('\n');
            this.points.push(z);
            resolve();
          } else {
            p.titles.push(z.titles[0]);
            const sizeIncrease = this.$vuetify.breakpoint.xsOnly ? .1 : .5;
            p.r = 5 + ((p.titles.length - 1) * sizeIncrease);
            resolve();
          }
        });
        promises.push(promise);
      });

      return Promise.all(promises).then(() => {
        this.points = this.points.sort((a, b) => a.y - b.y);
        this.points = this.points.sort((a, b) => a.x - b.x);
      });
    },
  },
  mounted() {
    this.initChart();
  },
  watch: {
    movies: 'initChart',
  },
};
</script>

<style lang="scss">
#bubble-chart {
  max-height: 70vh;
  max-width: 70vh;
}
</style>