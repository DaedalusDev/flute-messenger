<template>
  <q-layout v-if="utilisateur.id"
            key="logged"
            view="lHh Lpr lFf">
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
  <q-layout v-else
            view="lHh Lpr lFf" key="pas-logged">
    <q-dialog :value="!utilisateur.id" persistent>
      <q-card>
        <q-form @validation-success="logIn">
          <q-card-section class="text-h6">Connexion</q-card-section>
          <q-card-section>
            <q-input v-model="username"
                     label="Nom d'utilisateur"
                     :rules="[
                       (v) => v !== '' || 'Ce champ est obligatoire'
                     ]" />
          </q-card-section>
          <q-card-actions>
            <q-btn type="submit"
                   label="Connexion"
                   color="primary" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import routes from '@/router/routes'
import { createNamespacedHelpers } from 'vuex'

const storeUser = createNamespacedHelpers('user')

export default {
  name: 'LayoutDefault',
  routes: routes.filter((r) => r.meta),
  data () {
    return {
      username: '',
      leftDrawerOpen: false
    }
  },
  computed: {
    // ...storeUser.mapState(['utilisateur']),
    ...storeUser.mapState({
      utilisateur: 'utilisateur'
    })
    // ,
    // utilisateurPasBeau () {
    //   return this.$store.state.user.utilisateur
    // }
  },
  methods: {
    logIn () {
      console.log(this.username)
    }
  }
}
</script>

<style>
</style>
