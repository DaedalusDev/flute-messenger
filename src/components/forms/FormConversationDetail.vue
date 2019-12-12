<template>
  <q-form class="q-gutter-sm">
    <q-input v-model="value.libelle" libelle="Libelle" />
    <f-autocomplete
      v-model="value.participants"
      option-label="username"
      multiple
      use-chips
      map-options
      url-prefix="user"
    />
  </q-form>
</template>

<script>
import FAutocomplete from '@/components/fields/FAutocomplete'

export default {
  name: 'FormConversationDetail',
  components: { FAutocomplete },
  props: {
    value: {
      type: Object,
      default: _.stubObject
    }
  }
}
</script>

<style scoped>

</style>
