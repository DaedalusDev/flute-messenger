import * as actionTypes from './action-types'
import * as mutationTypes from './mutation-types'
import network from '@/utils/network'

export default {
  [actionTypes.USER_LOG_IN]: async ({ state, commit }, { username }) => {
    try {
      const r = await network(`user/${username}`)
      commit(mutationTypes.USER_SET_UTILISATEUR, r.data)
    } catch (e) {
      throw new Error(`Échec de l'authentification`)
    }
  }
}
