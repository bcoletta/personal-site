<template>
  <v-container fluid>
    <v-row class="mb-4">
      <v-col cols="0" md="2"></v-col>
      <v-col cols="12" md="8" class="grey darken-4 white--text py-4 px-8 rounded-lg text-center">
        <h4 class="text-h4">Movie Rankings</h4>
        <div>
          Since 2019, I have been keeping track of movies that I've been
          watching and rating them based on their entertainment value and their
          story. I will update this as I watch movies which so check back every
          now and then to find new reasons to argue with me about movies.
        </div>
        <div class="mt-4">
          You can click any movie in the list to see more details about that movie
        </div>
        <div class="subtitle-2 font-weight-regular font-italic mt-4">
          Disclaimer: I am not in any way qualified to be ranking movies and I
          have terrible taste. Don't believe me? Two of my favorite movies of
          all time are Accepted and Hot Rod.
        </div>
      </v-col>
      <v-col cols="0" md="2"></v-col>
    </v-row>
    <v-divider class="font-weight-bold"></v-divider>
  </v-container>
</template>

<script>
export default {
  name: 'MoviesMasthead',
}
</script>
