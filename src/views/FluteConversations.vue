<template>
  <div>
    Cette partie est fixe
    <router-view :conversations="conversations" />
  </div>
</template>

<script>
export default {
  name: 'FluteConversations',
  data () {
    return {
      conversations: []
    }
  }
}
</script>

<style scoped>

</style>
