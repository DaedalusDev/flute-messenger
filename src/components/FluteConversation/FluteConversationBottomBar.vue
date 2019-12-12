<template>
  <q-footer class="flex justify-center bg-transparent">
    <q-input v-model="msg"
             autogrow
             rounded outlined
             placeholder="Taper message"
             type="textarea"
             class="col bg-white"
             @keypress.ctrl.enter="onSubmit">
      <template #prepend>
        <q-btn round flat icon="fas fa-smile">
          <q-menu>
            <q-list>
              <q-item v-for="emoji in $options.emojis" :key="emoji.name"
                      v-close-popup
                      clickable
                      @click="onSelectEmoji(emoji.value)">
                <q-item-section>
                  <q-item-label>{{ emoji.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </template>
      <template #append>
        <q-btn round icon="fas fa-palette"
               :style="{color: color}">
          <q-popup-proxy>
            <q-color v-model="color" />
          </q-popup-proxy>
        </q-btn>
      </template>
    </q-input>
    <q-btn round icon="fas fa-paper-plane" color="primary"
           @click="onSubmit" />
  </q-footer>
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
    onSelectEmoji (v) {
      this.msg += v
    }
  }
}
</script>

<style scoped>

</style>
