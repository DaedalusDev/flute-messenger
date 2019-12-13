<template>
  <div>
    <q-btn round icon="fas fa-sync"
           @click="refresh" />
    <q-btn round icon="fas fa-sync" color="secondary"
           @click="refreshAvecMessage" />
    <router-view
      :conversations="conversations"
      @post-conversation="onPost"
    />
  </div>
</template>

<script>
import { uid } from 'quasar'
import { createNamespacedHelpers } from 'vuex'
import { CONVERSATIONS_FETCH_ALL } from '@/store/conversations/action-types'

const storeConversations = createNamespacedHelpers(
  'conversations'
)
export default {
  name: 'FluteConversations',
  data () {
    return {
      conversations: []
    }
  },
  methods: {
    ...storeConversations.mapActions({
      refresh: CONVERSATIONS_FETCH_ALL
    }),
    async refreshAvecMessage () {
      try {
        this.$q.loading.show({
          message: 'Mise à jour en cours'
        })
        await this.refresh()
        this.$q.notify({
          color: 'positive',
          message: 'Vous êtes à jour'
        })
      } catch (e) {
        this.$q.notify({
          color: 'negative',
          message: 'Echec de la mise à jour'
        })
      }
      this.$q.loading.hide()
    },
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
