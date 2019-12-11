<template>
  <div>
    <textarea v-model="msg" @keypress.ctrl.enter="onSubmit"></textarea>
    <button @click="onSubmit">Envoyer</button>
    <select :value="null" @input="onSelectEmoji">
      <option v-for="emoji in $options.emojis" :key="emoji.name"
              :value="emoji.value">
        {{ emoji.value }}
      </option>
    </select>
    <input type="color" v-model="color" />
  </div>
</template>

<script>
import { EMOJIS } from '@/consts'

export default {
  name: 'FluteConversationBottomBar',
  emojis: EMOJIS,
  data () {
    return {
      color: '#000',
      msg: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', { color: this.color, msg: this.msg })
      this.msg = ''
    },
    onSelectEmoji (e) {
      this.msg += e.target.value
      e.target.value = null
    }
  }
}
</script>

<style scoped>

</style>
