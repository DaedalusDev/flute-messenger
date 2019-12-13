import axios from 'axios'
import store from '@/store'
import { Notify, Loading } from 'quasar'

export const errorWrapper = async (f, opt = {}) => {
  Loading.show({
    message: 'Chargement',
    ...opt
  })
  try {
    await f()
    Notify.create({
      color: 'positive',
      message: 'It works !'
    })
  } catch (e) {
    Notify.create({
      color: 'negative',
      message: e.message
    })
  }
  Loading.hide()
}

export default axios.create({
  baseURL: 'https://flute.nexk.fr/api/',
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [
    (data, headers) => {
      const { token } = store.state.user.utilisateur
      if (token) {
        headers['X-AUTH-TOKEN'] = token
      }
      return data
    }
  ]
})
