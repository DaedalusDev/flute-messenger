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
  },
  [actionTypes.CONVERSATIONS_POST_CONVERSATION]:
    async ({ commit }, conversation) => {
      try {
        const r = await network.post(
          'conversation',
          JSON.stringify(conversation)
        )
        commit(
          conversation.id
            ? mutationTypes.CONVERSATIONS_UPDATE_CONVERSATION
            : mutationTypes.CONVERSATIONS_ADD_CONVERSATION,
          r.data
        )
      } catch (e) {
        throw Error(`Impossible d'insérer ou mettre à jour la conversation`)
      }
    }
}
