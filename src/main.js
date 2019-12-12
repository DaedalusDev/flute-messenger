import 'lodash'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './quasar'

Vue.config.productionTip = false

Vue.prototype._ = _
Vue.filter('upperCase', _.upperCase)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
