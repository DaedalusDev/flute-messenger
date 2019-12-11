<template>
  <transition-group name="list" tag="ul">
    <flute-conversation-liste-message
        v-for="message in messages" :key="message.id"
        :message="message" />
  </transition-group>
</template>

<script>
import FluteConversationListeMessage from '@/components/FluteConversation/FluteConversationListeMessage'

export default {
  name: 'FluteConversationListe',
  components: { FluteConversationListeMessage },
  props: {
    messages: {
      type: Array,
      default: _.stubArray
    }
  }
}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
