import Vue from 'vue'
import store from '../store'

export default {
  getMessages (email, callback) {
    console.log(store)
    Vue.$http.get('/students', email)
    .then(function (response) {
      // store.dispatch('')
      console.log('call messages api')
    })
  },
  sendMessages (messageParams, callback) {
    console.log(store)
    console.log(messageParams)
    Vue.$http.post('/message', messageParams)
    .then(function (response) {
      // store.dispatch('')
      console.log('post messages api')
    })
  }
}
