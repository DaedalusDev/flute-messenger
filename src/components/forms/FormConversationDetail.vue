<template>
  <q-form class="q-gutter-sm"
          @validation-success="$emit('submit', value)">
    <q-input v-model="value.libelle" libelle="Libelle"
             :rules="[ val => val && val.length > 0 || 'Merci de saisir un truc']" />
    <f-autocomplete
      v-model="value.participants"
      option-label="username"
      multiple
      use-chips
      map-options
      url-prefix="user"
      :rules="[ val => val && val.length > 0 || 'Merci de saisir un participant']"
    />
    <div>
      <q-btn label="Enregistrer" type="submit" color="primary" />
      <q-btn label="Annuler" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
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
