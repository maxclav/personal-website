<template>
  <v-col
    class="mb-5"
    cols="12"
  >
    <v-btn small text @click="switchLanguage" style="font-style: italic;">
      {{ dictionary['switch_language'][currentLanguage] }}
    </v-btn>
  </v-col>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'Translator',

    computed: {
      ...mapGetters({
        'currentLanguage': 'currentLanguage',
        'dictionary': 'dictionary'
      }),
    },

    methods: {
      ...mapActions({
        'switchLanguage': 'switchLanguage',
      }),
    }
  }
</script>