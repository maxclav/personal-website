<template>
  <v-container fill-height fluid>
    <v-row class="text-center" align="center" justify="center">
      <Title />
      <SocialLinks />
      <Translator />
    </v-row>
  </v-container>
</template>

<script>
import { SocialLinks, Title, Translator } from '../../components/Main'

export default {
  name: 'HomePage',

  components: {
    SocialLinks,
    Title,
    Translator,
  },
}
</script>