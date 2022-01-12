<template>
  <v-form @submit.prevent="add" v-model="valid">
    <v-autocomplete
      label="Title"
      v-model="tmdbId"
      :loading="loading"
      :search-input.sync="title"
      :items="movies"
      item-text="title"
      item-value="id"
      :rules="[requiredRule]"
    >
      <template v-slot:item="data">
        <v-list-item-avatar>
          <img :src="data.item.image" :alt="`Movie poster for ${data.item.title}`">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="data.item.title"></v-list-item-title>
        </v-list-item-content>
      </template>
    </v-autocomplete>

    <v-text-field type="number" label="Entertainment" v-model="e" :rules="[requiredRule]"/>

    <v-text-field type="number" label="Story" v-model="s" :rules="[requiredRule]"/>

    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Date Watched"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          :rules="[requiredRule]"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        scrollable
        @input="onDateInput"
      ></v-date-picker>
    </v-menu>

    <v-textarea rows="2" v-model="review" label="Review"/>

    <v-btn type="submit" :loading="saving">Save</v-btn>

    <v-alert type="success" v-if="saved" class="mt-4">Success!</v-alert>
  </v-form>
</template>

<script>
import { search } from '@/services/tmdb/tmdb-api-service';
import { addMovie } from '@/services/api/movie-service';

export default {
  name: 'AddMovie',
  data: () => ({
    title: '',
    tmdbId: null,
    e: null,
    s: null,
    date: null,
    formattedDate: null,
    review: '',
    movies: [],
    loading: false,
    menu: false,
    valid: true,
    requiredRule: v => !!v || 'Field is required',
    saving: false,
    saved: false,
  }),
  computed: {
    payload() {
      return {
        password: this.$store.getters.password,
        title: this.title,
        tmdbId: this.tmdbId,
        e: this.e,
        s: this.s,
        date: this.formattedDate,
        review: this.review,
      }
    },
  },
  methods: {
    add() {
      if (this.valid) {
        this.saving = true;
        this.saved = false;
        addMovie(this.payload).then(() => {
          this.saved = true;
        }).catch(() => {
          this.saved = false;
        }).finally(() => {
          this.saving = false;
        });
      }
    },
    onDateInput(val) {
      this.$refs.menu.save(this.date);
      const fullDate = new Date(this.date);
      this.formattedDate = `${ fullDate.getMonth() + 1 }/${ fullDate.getDate() + 1 }/${ fullDate.getFullYear() }`
    },
    searchMovies(val) {
      this.loading = true;
      search(this.title).then(res => {
        this.movies = res?.data?.results.map(m => {
          return {
            title: m.title,
            id: m.id,
            image: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${ m.poster_path }`,
          };
        });
        this.loading = false;
      });
    },
  },
  watch: {
    title() {
      if (this.title) this.searchMovies();
    },
  },
}
</script>

<style scoped>

</style>