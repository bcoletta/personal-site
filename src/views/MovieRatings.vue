<template>
  <v-container>
    <v-row id="rankings-row" dense v-if="!loading">
      <v-col cols="12" md="8">
        <MovieChart v-if="!loading" :movies="displayMovies" />
      </v-col>
      <v-col cols="12" md="4">
        <MoviesList :movies="displayMovies" @filter="setFilter"/>
      </v-col>
    </v-row>
    <v-progress-circular indeterminate v-else />
  </v-container>
</template>

<script>
import MoviesList from '@/components/movies/MoviesList';
import MovieChart from '@/components/movies/MovieChart';

export default {
  name: 'MovieRankings',
  components: { MovieChart, MoviesList },
  data() {
    return {
      loading: true,
      filter: '',
      movies: [],
    }
  },
  computed: {
    displayMovies() {
      return this.movies.filter(m => m.title.toLowerCase().includes(this.filter));
    },
  },
  methods: {
    getMovies() {
      this.loading = true;
      this.$store.dispatch('getMovies')
        .then(res => {
          this.movies = res;
          this.loading = false;
        })
    },
    setFilter(filter) {
      this.filter = filter.toLowerCase();
    },
  },
  mounted() {
    this.getMovies();
  },
}
</script>

<style scoped>
</style>