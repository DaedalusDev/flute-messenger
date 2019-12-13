import * as actionTypes from './action-types'
import * as mutationTypes from './mutation-types'
import network from '@/utils/network'

export default {
  [actionTypes.CONVERSATIONS_FETCH_ALL]: async ({ rootGetters, commit }) => {
    if (!rootGetters['user/estConnecte']) {
      throw new Error('Vous devez etre en ligne pour récupérer vos conversations')
    }
    try {
      const r = await network('user/conversations')
      commit(mutationTypes.CONVERSATIONS_SET_CONVERSATIONS, r.data)
    } catch (e) {
      throw new Error('Échec de la récupération des conversations')
    }
  }
}
