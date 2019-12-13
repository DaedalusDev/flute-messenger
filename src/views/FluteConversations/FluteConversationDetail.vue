<template>
  <q-page padding>
    <form-conversation-detail
      v-model="conversation"
      @submit="onSubmit" />
  </q-page>
</template>

<script>
import FormConversationDetail from '@/components/forms/FormConversationDetail'
import { createNamespacedHelpers } from 'vuex'
import { CONVERSATIONS_POST_CONVERSATION } from '@/store/conversations/action-types'
import { errorWrapper } from '@/utils/network'

const storeConversations = createNamespacedHelpers('conversations')

export default {
  name: 'FluteConversationDetail',
  components: { FormConversationDetail },
  data () {
    return {
      conversation: {
        libelle: '',
        participants: []
      }
    }
  },
  methods: {
    ...storeConversations.mapActions({
      postConversation: CONVERSATIONS_POST_CONVERSATION
    }),
    onSubmit (v) {
      errorWrapper(async () => {
        await this.postConversation(v)
        this.$q.$notify({
          message: 'Génial !'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
