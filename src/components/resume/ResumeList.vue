<template>
  <v-row>
    <v-col>
      <h4 class="text-h4">{{ title }}</h4>
      <template v-for="(item, i) in list">
        <ResumeItem :item="item" :key="`resume-${item.title}`" />
        <v-divider v-if="i !== list.length - 1" :key="`resume-${item.title}-divider`" />
      </template>
    </v-col>
  </v-row>
</template>

<script>
import ResumeItem from '@/components/resume/ResumeItem';
export default {
  name: 'ResumeList',
  components: { ResumeItem },
  props: [ 'list', 'title' ],
}
</script>

<style scoped>

</style>