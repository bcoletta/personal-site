<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <MoviesMasthead />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs dark>
          <v-tab to="/movies/ratings">Ratings</v-tab>
          <v-tab to="/movies/stats">Stats</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MoviesMasthead from '@/components/movies/MoviesMasthead';

export default {
  name: 'Movies',
  components: {
    MoviesMasthead,
  },
}
</script>

<style scoped>

</style>