<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        v-bind="attrs"
        v-on="on"
        @click="getTheme"
      >
        {{ getIcon() }}
      </v-icon>
    </template>
    <span>{{ dictionary['theme'][currentTheme][currentLanguage] }}</span>
  </v-tooltip>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'Theme',

    computed: {
      ...mapGetters({
        'currentLanguage': 'currentLanguage',
        'currentTheme': 'currentTheme',
        'dictionary': 'dictionary'
      }),
    },

    methods: {
      ...mapActions({
        'switchTheme': 'switchTheme',
      }),

      getTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.switchTheme();
      },

      getIcon() {
        if (this.currentTheme == 'dark') {
          return 'mdi-moon-waning-crescent'
        }
        return 'mdi-white-balance-sunny'
      }
    }
  }
</script>