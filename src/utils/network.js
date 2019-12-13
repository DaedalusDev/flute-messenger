import axios from 'axios'
import store from '@/store'

export default axios.create({
  baseURL: 'https://flute.nexk.fr/api/',
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
