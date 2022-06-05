<template>
  <div class="col-lg-9">
    <ResumeWorkExp />
    <!-- WIP
    <ResumeCertifications />
    -->
    <ResumeSchool />
    <ResumeProjects />
  </div>
</template>

<script>
  import ResumeWorkExp from './Sections/Work/WorkExp';
  // import ResumeCertifications from './Sections/Certifications/Certifications';
  import ResumeSchool from './Sections/School/School';
  import ResumeProjects from './Sections/Projects/Projects';

  import { mapGetters } from "vuex";

  export default {
    name: 'Resume',

    components: {
      ResumeWorkExp,
      // ResumeCertifications,
      ResumeSchool,
      ResumeProjects,
    },

    data: () => ({}),

    computed: {
      ...mapGetters({
        'currentLanguage': 'currentLanguage',
        'dictionary': 'dictionary'
      }),
    },
  }
</script>