<template>
  <v-list v-if="topTen" dense>
    <v-list-item class="font-weight-bold">
      <v-list-item-content>
        <span class="font-weight-bold">{{ year || 'Overall' }} Top Movies</span>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text>Avg</v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
    <v-list-item v-for="(item, i) in items" :key="`overall-top-ten-${i}`">
      <v-list-item-content>
        {{ item.rank }}. {{ item.title }}
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text v-text="item.avg"></v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'TopTen',
  props: [ 'topTen', 'year' ],
  computed: {
    items() {
      let rank = 1;
      let prevAvg = null;
      let returnItems = [];

      this.topTen.forEach((item, i) => {
        if (prevAvg && item.avg !== prevAvg) rank = i + 1;

        prevAvg = item.avg;

        returnItems.push({
          title: item.title,
          avg: item.avg,
          rank,
        });
      });

      return returnItems;
    },
  },
}
</script>

<style scoped>

</style>