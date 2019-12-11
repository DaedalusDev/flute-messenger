<template>
  <li :style="{ color: message.color }">
    <div>{{ message.dateEtHeure }}</div>
    <div>{{ message.expediteur }}</div>
    <pre>{{ message.msg | emoji }}</pre>
  </li>
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
