<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="fas fa-bars"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item v-for="route in $options.routes" :key="route.name"
                :to="route.path"
                :exact="!route.children"
                clickable>
          <q-item-section avatar>
            <q-icon :name="route.meta.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ route.meta.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import routes from '@/router/routes'

export default {
  name: 'LayoutDefault',
  routes: routes.filter((r) => r.meta),
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
