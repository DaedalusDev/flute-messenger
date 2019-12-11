<template>
  <div>
    <flute-conversation-bottom-bar
        @submit="onSubmit" />
    <flute-conversation-liste
        :messages="messages" />
  </div>
</template>

<script>
import FluteConversationBottomBar from '@/components/FluteConversation/FluteConversationBottomBar'
import FluteConversationListe from '@/components/FluteConversation/FluteConversationListe'

export default {
  name: 'FluteConversation',
  components: { FluteConversationListe, FluteConversationBottomBar },
  data () {
    return {
      id: 0,
      messages: []
    }
  },
  methods: {
    onSubmit ({ color, msg }) {
      const { messages } = this
      const message = {
        id: ++this.id,
        dateEtHeure: new Date(),
        msg,
        color,
        expediteur: _.upperFirst('Fln Slr')
      }
      messages.push(message)
    }
  }
}
</script>

<style scoped>

</style>
