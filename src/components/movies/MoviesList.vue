<template>
  <v-container id="movie-list">
    <v-text-field full-width hide-details outlined placeholder="Find a movie..." v-model="search"></v-text-field>
    <v-list two-line>
      <v-list-item-group>
        <template v-for="(movie, i) in sortedMovies">
          <v-list-item :key="`movie-list-${movie.id}`">
            <v-list-item-content>
              <v-list-item-title>
                {{ movie.title }}
              </v-list-item-title>

              <v-list-item-subtitle v-text="`Entertainment: ${movie.e}`"></v-list-item-subtitle>
              <v-list-item-subtitle v-text="`Story: ${movie.s}`"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text v-text="movie.date"></v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>

          <v-divider v-if="i < movies.length - 1" :key="`movie-list-divider-${i}`"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'MoviesList',
  props: [ 'movies' ],
  data() {
    return {
      search: '',
      sort: 'date',
    }
  },
  computed: {
    sortedMovies() {
      if (this.movies) {
        return [ ...this.movies ].sort((a, b) => {
          if (this.sort === 'date') {
            return new Date(a.date) < new Date(b.date) ? 1 : -1;
          } else if (this.sort === 'title') {
            return a[this.sort] > b[this.sort] ? 1 : -1;
          } else {
            return a[this.sort] < b[this.sort] ? 1 : -1;
          }
        });
      }
      return [];
    },
  },
  watch: {
    search(val) {
      this.$emit('filter', val);
    },
  },
}
</script>

<style lang="scss" scoped>
#movie-list {
  max-height: 70vh;
  overflow-y: scroll;
}
</style>