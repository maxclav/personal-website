<template>
  <!-- SOCIAL LINKS -->
  <v-col
    class="mb-5"
    cols="12"
  >
    <v-row justify="center">
      <v-btn 
        text
        :href="href['linkedin']"
        target="_blank"
      >
        LinkedIn
      </v-btn>

      <v-btn 
        v-if="isHomePage"
        text
        href="/cv"
      >
        {{ dictionary['resume'][currentLanguage] }}
      </v-btn>
      <v-btn 
        v-if="isResumePage"
        text
        href="/"
      >
        {{ dictionary['home-page'][currentLanguage] }}
      </v-btn>

      <v-btn 
        text
        :href="href['hire']"
        target="_blank"
      >
          {{ dictionary['hire'][currentLanguage] }}
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: 'SocialLinks',

    data: () => ({
      href: {
        linkedin: 'https://www.linkedin.com/in/maxime-clavel/',
        hire: 'https://bit.ly/3s8lYSY'
      } 
    }),

    computed: {
      ...mapGetters({
        'currentLanguage': 'currentLanguage',
        'dictionary': 'dictionary'
      }),

      isHomePage() {
        return this.$route.path == '/'
      },

      isResumePage() {
        return this.$route.path == '/cv'
      }
    },
  }
</script>

<style>
  .sociallink {
  }
</style>