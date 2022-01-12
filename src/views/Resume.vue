<template>
  <v-container>
    <ResumeMasthead />
    <v-container>
      <ResumeList :list="workList" title="Work Experience"/>
      <ResumeList :list="educationList" title="Education"/>
    </v-container>
  </v-container>
</template>

<script>
import resumeData from '@/assets/resume-data.json';
import ResumeList from '@/components/resume/ResumeList';
import ResumeMasthead from '@/components/resume/ResumeMasthead';

export default {
  name: 'Resume',
  components: { ResumeMasthead, ResumeList },
  computed: {
    workList() {
      return resumeData.work;
    },
    educationList() {
      return resumeData.education;
    },
  },
}
</script>

<style scoped>

</style>