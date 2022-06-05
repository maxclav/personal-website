<template>
  <v-container fill-height fluid>
    <v-row class="text-center" align="center" justify="center">
      <Resume />
      <SocialLinks />
      <Translator />
    </v-row>
</v-container>
</template>

<script>
import { Resume } from '../../components'
import { SocialLinks, Translator } from '../../components/Main'

export default {
  name: 'ResumePage',

  components: {
    Resume,
    SocialLinks,
    Translator,
  },
}
</script>