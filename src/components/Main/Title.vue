<template>
  <v-col class="mb-4">
    <h1 class="display-2 font-weight-bold mb-3" style="cursor:default">
      Maxime Clavel
    </h1>
    <h2 class="headline mb-3" style="cursor:default">
      {{ dictionary['engineer'][currentLanguage] }}
    </h2>
  </v-col>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: 'Title',

    computed: {
      ...mapGetters({
        'currentLanguage': 'currentLanguage',
        'dictionary': 'dictionary'
      }),
    },
  }
</script>