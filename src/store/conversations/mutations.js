import * as mutationTypes from './mutation-types'

export default {
  [mutationTypes.CONVERSATIONS_SET_CONVERSATIONS]: (state, conversations) => {
    state.conversations = conversations
  }
}
