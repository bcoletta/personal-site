<template>
  <v-container fluid>
    <v-row class="mb-4">
      <v-col cols="0" md="2"></v-col>
      <v-col cols="12" md="8" class="grey darken-4 py-4 px-8 rounded-lg">
        <v-row>
          <v-col cols="12" md="6" class="text-center white--text d-flex flex-column justify-center">
            <h4 class="text-h4">Welcome!</h4>
            <p>
              My name is Brendan Coletta and I am a Front-end developer in Denver, CO.
              I enjoy working with VueJS to build web apps that make people's lives easier.
            </p>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-center">
            <v-img src="@/assets/LinkedInProfilePicture1.jpg" class="rounded-circle" width="100%"
                   max-width="200px"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" v-for="button in buttons" :key="`resume-button-${button.text}`">
            <v-btn
              width="100%"
              color="white"
              class="blue--text text--darken-4"
              :href="button.href"
              target="_blank"
            >
              <v-icon class="mr-2">{{ button.icon }}</v-icon>
              <template v-if="$vuetify.breakpoint.smAndUp">{{ button.text }}</template>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="0" md="2"></v-col>
    </v-row>
    <v-divider class="font-weight-bold"></v-divider>
  </v-container>
</template>

<script>
export default {
  name: 'ResumeMasthead',
  data() {
    return {
      buttons: [
        {
          text: 'LinkedIn',
          icon: 'mdi-linkedin',
          href: 'https://www.linkedin.com/in/brendancoletta/',
        },
        {
          text: 'Resume',
          icon: 'mdi-google-drive',
          href: 'https://drive.google.com/file/d/1kpbN19E6Y3-XW5Kwxkbfrvs4ahxeQNZ6/view',
        },
        {
          text: 'Email',
          icon: 'mdi-email-outline',
          href: 'mailto:bc.coletta+website@gmail.com',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>