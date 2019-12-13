import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  actions,
  mutations,
  state: {
    utilisateur: {
      id: null,
      username: 'Anonyme'
    }
  }
}
