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
  },
  getCompanyProfile (callback) {
    Vue.$http.get('/company/' + localStorage.getItem('email'))
    .then(function (response) {
      callback(response.data)
      console('eiei')
      return response.dataconsole.log('1234567890')
    })
    .catch(function (response) {
      console.log('CatchGetProfile')
    })
  },
  Edit (editParams, callback) {
    console.log(store)
    Vue.$http.post('/company/edit', editParams)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log('CatchEdit')
    })
      // store.dispatch('signup')
      // callback(response.data)
  }
}
