<template>
  <UbisoftExp />
</template>

<script>
  import UbisoftExp from './Exp/Ubisoft';

  import { mapGetters } from "vuex";

  export default {
    name: 'WorkExp',

    components: {
      UbisoftExp,
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