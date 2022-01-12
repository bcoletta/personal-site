<template>
  <v-container>
    <v-row class="mb-8">
      <Stat title="Total" :value="stats.total" />
      <Stat title="Average Entertainment" :value="stats['avg_e'].toFixed(2)" />
      <Stat title="Average Story" :value="stats['avg_s'].toFixed(2)" />
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <TopTen :top-ten="stats.topTen" :year="year" />
      </v-col>
      <v-col cols="12" md="6">
        <MoviesByMonth :monthly-stats="stats.byMonth" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Stat from '@/components/Stat';
import TopTen from '@/components/movies/stats/TopTen';
import MoviesByMonth from '@/components/movies/stats/MoviesByMonth';
export default {
  name: 'StatsByYear',
  components: { MoviesByMonth, TopTen, Stat },
  props: [ 'year', 'stats' ],
}
</script>

<style scoped>

</style>