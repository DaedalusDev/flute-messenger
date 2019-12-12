<template>
  <div>
    Cette partie est fixe
    <router-view
      :conversations="conversations"
      @post-conversation="onPost"
    />
  </div>
</template>

<script>
import { uid } from 'quasar'

export default {
  name: 'FluteConversations',
  data () {
    return {
      conversations: []
    }
  },
  methods: {
    onPost (conversation) {
      const id = uid()
      this.conversations.push({
        ...conversation,
        messages: [],
        id
      })
      this.$router.replace({
        name: 'conversation',
        params: {
          id
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
