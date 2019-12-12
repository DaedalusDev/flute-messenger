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
    conversation () {
      return this.conversations[this.id]
    }
  },
  methods: {
    onSubmit ({ color, msg }) {
      const message = {
        id: uid(),
        dateEtHeure: new Date(),
        msg,
        color,
        expediteur: _.upperFirst('Fln Slr')
      }
      this.conversation.messages.push(message)
    }
  }
}
</script>

<style scoped>

</style>
