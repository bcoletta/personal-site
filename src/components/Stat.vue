<template>
  <v-col class="text-center">
    <h4 class="text-h4 text-capitalize">{{ title }}</h4>
    <v-avatar color="blue" size="100">
      <span class="white--text text-h4">{{ value }}</span>
    </v-avatar>
  </v-col>
</template>

<script>
export default {
  name: 'Stat',
  props: [ 'title', 'value' ],
}
</script>

<style scoped>

</style>