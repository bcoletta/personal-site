<template>
  <v-container>
    <v-row class="mb-8">
      <Stat title="Total" :value="overall.total" />
      <Stat title="Average Entertainment" :value="overall['avg_e'].toFixed(2)" />
      <Stat title="Average Story" :value="overall['avg_s'].toFixed(2)" />
    </v-row>
    <v-row>
      <v-col cols="6" md="4" lg="3">
        <MoviesByYear :years="years" />
      </v-col>
      <v-col cols="6" md="4" lg="3">
        <AveragesByYear :years="years" />
      </v-col>
      <v-col cols="12" md="4" lg="6">
        <TopTen :top-ten="overall.topTen" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MoviesByYear from '@/components/movies/stats/MoviesByYear';
import AveragesByYear from '@/components/movies/stats/AveragesByYear';
import TopTen from '@/components/movies/stats/TopTen';
import Stat from '@/components/Stat';
export default {
  name: 'StatsOverall',
  props: [ 'overall', 'years' ],
  components: {
    Stat,
    TopTen,
    AveragesByYear,
    MoviesByYear,
  },
}
</script>

<style scoped>

</style>