<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="primary"
              title="Click here to change the time period of the stats"
            >
              {{ timeFrame }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="opt in timeOptions"
              :key="`time-options-${opt}`"
              link
              @click="setTimeFrame(opt)"
            >
              {{ opt }}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" v-if="stats">
        <StatsOverall v-if="showOverall" :overall="overall" :years="years"/>
        <StatsByYear v-else :year="timeFrame" :stats="yearlyStats"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StatsOverall from '@/components/movies/stats/StatsOverall';
import StatsByYear from '@/components/movies/stats/StatsByYear';

export default {
  name: 'MovieStats',
  components: {
    StatsByYear,
    StatsOverall,
  },
  data() {
    return {
      loading: true,
      stats: null,
    }
  },
  computed: {
    overall() {
      return this.stats?.overall || []
    },
    years() {
      return this.stats?.years.filter(yr => yr.total > 9) || [];
    },
    showOverall() {
      return this.timeFrame === 'Overall';
    },
    timeFrame() {
      return this.$route.query.tf || 'Overall';
    },
    timeOptions() {
      let years = this.years.map(yr => yr.year);
      return [
        'Overall',
        ...years,
      ]
    },
    yearlyStats() {
      if (this.showOverall) return false;
      return this.years.find(yr => yr.year === this.timeFrame);
    },
  },
  methods: {
    setTimeFrame(timeFrame) {
      this.$router.push({ query: { tf: timeFrame } });
    },
    getStats() {
      this.loading = true;
      this.$store.dispatch('getStats').then(res => {
        this.stats = res;
        this.loading = false;
      })
    },
  },
  mounted() {
    this.getStats();
  },
}
</script>

<style scoped>

</style>