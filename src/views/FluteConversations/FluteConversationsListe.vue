<template>
  <div>
    <q-list v-if="conversations.length">
      <FluteConversationsListeItem v-for="conversation in conversations"
                                   :key="conversation.id"
                                   :conversation="conversation" />
    </q-list>
    <div v-else>
      Vous n'avez pas de conversation
    </div>
    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]">
      <q-btn fab icon="fa fa-plus"
             color="positive"
             :to="{name:'conversationNew'}" />
    </q-page-sticky>
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
