const THEME_DARK = 'dark'
const THEME_LIGHT = 'light'

const state = {
  currentTheme: THEME_LIGHT
}

const getters = {
  currentTheme: state => state.currentTheme
}

const actions = {
  switchTheme ({ commit }) {
    commit('SWITCH_THEME')
  }
}

const mutations = {
  SWITCH_THEME (state) {
    if (state.currentTheme === THEME_DARK) {
      state.currentTheme = THEME_LIGHT
    } else {
      state.currentTheme = THEME_DARK
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
