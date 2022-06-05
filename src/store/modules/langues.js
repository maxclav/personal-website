const LANGUAGE_ENGLISH = 'en'
const LANGUAGE_FRENCH = 'fr'

const state = {
  currentLanguage: LANGUAGE_ENGLISH,
  dictionary: {
    'codeToCoffee': {
      en: 'Turning coffee into code....',
      fr: 'Transforme du café en code.... '
    },
    'wip': {
      en: 'Work In Progress...',
      fr: 'En construction...'
    },
    'contact': {
      en: 'Contact me',
      fr: 'Me contacter'
    },
    'engineer': {
      en: 'B. Software Engineer',
      fr: 'B. Ingénieur Logiciel'
    },
    'hire': {
      en: 'Hire Me',
      fr: 'Me recruter'
    },
    'job': {
      'place': {
        en: 'Ubisoft Montreal',
        fr: 'Ubisoft Montréal'
      },
      'title': {
        en: 'Online Programmer',
        fr: 'Programmeur Online'
      }
    },
    'resume': {
      en: 'Resume',
      fr: 'Curriculum Vitae'
    },
    'home-page': {
      en: 'Home Page',
      fr: 'Page Principale'
    },
    'switch_language': {
      en: 'Je parle français',
      fr: 'I speak english'
    },
    'theme': {
      'dark': {
        en: 'Dark',
        fr: 'Sombre'
      },
      'light': {
        en: 'Light',
        fr: 'Clair'
      }
    },
    'title': {
      en: 'B. Eng.',
      fr: 'B. Ing.'
    }
  }
}

const getters = {
  currentLanguage: state => state.currentLanguage,
  dictionary: state => state.dictionary
}

const actions = {
  switchLanguage ({ commit }) {
    commit('SWITCH_LANGUAGE')
  }
}

const mutations = {
  SWITCH_LANGUAGE (state) {
    if (state.currentLanguage === LANGUAGE_ENGLISH) {
      state.currentLanguage = LANGUAGE_FRENCH
    } else {
      state.currentLanguage = LANGUAGE_ENGLISH
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
