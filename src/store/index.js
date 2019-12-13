import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    user
  },
  strict: process.env.NODE_ENV !== 'production'
})

if (module.hot) {
  module.hot.accept(['./user'], () => {
    const newUser = require('./user').default
    // swap in the new modules and mutations
    store.hotUpdate({
      modules: {
        user: newUser
      }
    })
  })
}

export default store
