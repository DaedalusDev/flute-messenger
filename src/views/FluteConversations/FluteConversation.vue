<template>
  <div v-if="conversation" key="if">
    <flute-conversation-liste
      :messages="conversation.messages" />
    <flute-conversation-bottom-bar
      @submit="onSubmit" />
  </div>
  <div v-else key="else">
    Impossible de trouver la conversation
  </div>
</template>

<script>
import { uid } from 'quasar'
import FluteConversationBottomBar from '@/components/FluteConversation/FluteConversationBottomBar'
import FluteConversationListe from '@/components/FluteConversation/FluteConversationListe'
import viewConversationMixin from '@/mixins/viewConversationMixin'
import { createNamespacedHelpers } from 'vuex'

const storeUser = createNamespacedHelpers('user')

export default {
  name: 'FluteConversation',
  components: { FluteConversationListe, FluteConversationBottomBar },
  mixins: [viewConversationMixin],
  props: {
    id: {
      type: [String, Number]
    }
  },
  computed: {
    ...storeUser.mapState({
      utilisateur: 'utilisateur'
    }),
    conversation () {
      return _.find(this.conversations, { id: this.id })
    }
  },
  methods: {
    onSubmit ({ color, msg }) {
      const message = {
        id: uid(),
        dateEtHeure: new Date(),
        msg,
        color,
        expediteur: _.upperFirst(this.utilisateur.username)
      }
      this.conversation.messages.push(message)
    }
  }
}
</script>

<style scoped>

</style>
