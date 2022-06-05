<template>
  <div class="col-lg-3">
    SideBar
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: 'ResumeMain',

    data: () => ({}),

    computed: {
      ...mapGetters({
        'currentLanguage': 'currentLanguage',
        'dictionary': 'dictionary'
      }),
    },
  }
</script>