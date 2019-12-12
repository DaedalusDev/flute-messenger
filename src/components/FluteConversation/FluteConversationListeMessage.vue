<template>
  <q-chat-message
    :stamp="message.dateEtHeure.toString()"
    :name="message.expediteur">
    {{ message.msg | emoji }}
  </q-chat-message>
</template>

<script>
import { EMOJI_REGEXP, EMOJI_SHORTCUTS } from '@/consts'

export default {
  name: 'FluteConversationListeMessage',
  filters: {
    emoji (s) {
      return s.replace(EMOJI_REGEXP, (s) => EMOJI_SHORTCUTS[s].value)
    }
  },
  props: {
    message: Object
  }
}
</script>

<style scoped>

</style>
