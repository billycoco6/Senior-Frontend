import Vue from 'vue'
import store from '../store'

export default {
  routeCompanyProfile (companyName, callback) {
    console.log(store)
  },
  signUp (signupParams, callback) {
    console.log(store)
    Vue.$http.post('/register', signupParams)
    .then(function (response) {
      store.dispatch('signup')
      // callback(response.data)
    })
  }
}
