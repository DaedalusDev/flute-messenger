import * as mutationTypes from './mutation-types'

export default {
  [mutationTypes.CONVERSATIONS_SET_CONVERSATIONS]: (state, conversations) => {
    state.conversations = conversations
  },
  [mutationTypes.CONVERSATIONS_ADD_CONVERSATION]: (state, conversation) => {
    state.conversations.push(conversation)
  },
  [mutationTypes.CONVERSATIONS_UPDATE_CONVERSATION]: (state, conversation) => {
    const i = _.findIndex(
      state.conversations,
      { id: conversation.id }
    )
    state.conversations.splice(i, 1, conversation)
  },
  [mutationTypes.CONVERSATIONS_DELETE_CONVERSATION]: (state, { id }) => {
    const i = _.findIndex(
      state.conversations,
      { id }
    )
    state.conversations.splice(i, 1)
  }
}
