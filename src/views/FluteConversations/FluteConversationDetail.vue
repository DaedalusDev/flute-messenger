<template>
  <q-page padding>
    <form-conversation-detail v-model="conversation" />
  </q-page>
</template>

<script>
import FormConversationDetail from '@/components/forms/FormConversationDetail'

export default {
  name: 'FluteConversationDetail',
  components: { FormConversationDetail },
  data () {
    return {
      conversation: {
        id: null,
        libelle: '',
        participants: [],
        lastMessage: null
      }
    }
  }
}
</script>

<style scoped>

</style>
