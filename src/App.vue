<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="grey darken-4"
      :collapse="$vuetify.breakpoint.xsOnly"
    >
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.xsOnly" @click="drawer = !drawer"/>
      <v-btn text link to="/">
        <v-img src="./assets/favicon.png"></v-img>
      </v-btn>
      <v-tabs align-with-title>
        <v-tab link to="/resume">
          <v-icon class="mr-2">{{ resumeIcon }}</v-icon>
          Resume
        </v-tab>
        <v-tab link to="/movies">
          <v-icon class="mr-2">{{ movieIcon }}</v-icon>
          Movies
        </v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-switch v-model="$vuetify.theme.dark" label="Dark Mode" class="mt-4"></v-switch>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list dense nav>
        <v-list-item link to="/resume">
          <v-list-item-icon>
            <v-icon>{{ resumeIcon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Resume</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/movies">
          <v-list-item-icon>
            <v-icon>{{ movieIcon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Movies</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-divider></v-divider>
        <v-switch
          v-model="$vuetify.theme.dark"
          label="Dark Mode"
        ></v-switch>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
  }),
  computed: {
    resumeIcon() {
      return this.$route.name === 'resume' ? 'mdi-file' : 'mdi-file-outline'
    },
    movieIcon() {
      return this.$route.name === 'movies' ? 'mdi-movie-open' : 'mdi-movie-open-outline'
    },
  },
};
</script>
