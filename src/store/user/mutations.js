import * as mutationTypes from './mutation-types'

export default {
  [mutationTypes.USER_SET_UTILISATEUR]: (state, utilisateur) => {
    state.utilisateur = utilisateur
  }
}
