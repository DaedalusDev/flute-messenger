<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FluteConversation />
  </div>
</template>

<script>
// @ is an alias to /src
import FluteConversation from '@/components/FluteConversation/FluteConversation'

export default {
  name: 'home',
  components: {
    FluteConversation
  }
}
</script>
