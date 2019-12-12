<template>
  <q-select
    filled
    :value="value"
    use-input
    fill-input
    :options="results"
    @filter="filterFn"
    @filter-abort="abortFilterFn"
    v-bind="vProps"
    v-on="$listeners"
  >
    <template #no-option>
      <q-item>
        <q-item-section class="text-grey">
          Aucun résultat
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
import network from '@/utils/network'

export default {
  name: 'FAutocomplete',
  props: {
    value: {},
    optionValue: {
      type: String,
      default: 'id'
    },
    optionLabel: {
      type: String,
      default: 'libelle'
    },
    urlPrefix: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      results: []
    }
  },
  computed: {
    vProps () {
      return {
        ...this.$props,
        ...this.$attrs
      }
    }
  },
  methods: {
    async filterFn (val, update, abort) {
      if (val === '') {
        return abort()
      }
      const r = await network({
        url: `${this.urlPrefix}/find/${val}`
      })
      update(() => {
        this.results = r.data
      })
    },

    abortFilterFn () {
      // console.log('delayed filter aborted')
    }
  }
}
</script>

<style scoped>

</style>
