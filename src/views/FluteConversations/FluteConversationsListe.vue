<template>
  <q-list v-if="conversations.length">
    <FluteConversationsListeItem v-for="conversation in conversations"
                                 :key="conversation.id"
                                 :conversation="conversation" />
  </q-list>
  <div v-else>
    Vous n'avez pas de conversation
  </div>
</template>

<script>
import FluteConversationsListeItem from '@/components/FluteConversation/FluteConversationsListeItem'
import viewConversationMixin from '@/mixins/viewConversationMixin'

export default {
  name: 'FluteConversationsListe',
  components: { FluteConversationsListeItem },
  mixins: [viewConversationMixin]
}
</script>
