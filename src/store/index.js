import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import conversations from './conversations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    user,
    conversations
  },
  strict: process.env.NODE_ENV !== 'production'
})

if (module.hot) {
  module.hot.accept(['./user', './conversations'], () => {
    const newUser = require('./user').default
    const newConversations = require('./conversations').default
    // swap in the new modules and mutations
    store.hotUpdate({
      modules: {
        user: newUser,
        conversations: newConversations
      }
    })
  })
}

export default store
