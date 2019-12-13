import * as actionTypes from './action-types'
import * as mutationTypes from './mutation-types'
import network from '@/utils/network'
import { CONVERSATIONS_FETCH_ALL } from '@/store/conversations/action-types'

export default {
  [actionTypes.USER_LOG_IN]: async ({ state, commit, dispatch }, { username }) => {
    try {
      const r = await network(`user/${username}`)
      commit(mutationTypes.USER_SET_UTILISATEUR, r.data)
    } catch (e) {
      throw new Error(`Échec de l'authentification`)
    }
    await dispatch(`conversations/${CONVERSATIONS_FETCH_ALL}`, null, { root: true })
    // Autre traitement
  }
}
