<template>
<v-container>
  <v-row>
    <v-col cols="12" md="4" class="d-flex flex-column justify-center">
      <h5 class="text-h5">{{ item.title }}</h5>
      <div class="text-subtitle-1">{{ item.position }}</div>
      <div class="text-subtitle-2">{{ item.dates }}</div>
    </v-col>
    <v-col cols="12" md="8">
      <v-list dense>
        <v-list-item v-for="(point, i) in item.points" :key="`resume-${item.title}-point-${i}`">
          <v-list-item-icon class="mr-2">
            <v-icon>mdi-menu-right</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-if="point.header">{{ point.header }}</v-list-item-title>
            <v-list-item-subtitle v-if="point.description">{{ point.description }}</v-list-item-subtitle>
            <template v-if="!point.header && !point.description">{{ point }}</template>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'ResumeItem',
  props: [ 'item' ],
}
</script>

<style scoped>

</style>