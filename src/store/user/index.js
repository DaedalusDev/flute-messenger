import actions from './actions'

export default {
  namespaced: true,
  actions,
  state: {
    utilisateur: {
      id: null,
      username: 'Anonyme'
    }
  }
}
