import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import langues from './modules/langues.js'
import theme from './modules/theme.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    langues,
    theme
  },
  plugins: [new VuexPersistence().plugin]
})

export default store
