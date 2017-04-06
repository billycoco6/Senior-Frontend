import Vue from 'vue'
import store from '../store'
import formurlencoded from 'form-urlencoded'

export default {
  signUp (signupParams, callback) {
    console.log(store)
    Vue.$http.post('/register', signupParams)
    .then(function (response) {
      store.dispatch('signup')
      // callback(response.data)
    })
  },
  logIn (loginParams, callback) {
    console.log(store)
    console.log(loginParams)
    Vue.$http.post('/login', formurlencoded(loginParams))
    .then(function (response) {
      store.dispatch('login')
      localStorage.setItem('email', loginParams.username)
      // console.log(localStorage.getItem('email'))
      callback(response.data)
      localStorage.setItem('email', loginParams.username)
      console.log('log in response')
      console.log(response.data)
      return response.data
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  userDetail (email, callback) {
    console.log(store)
    // console.log(email)
    Vue.$http.get('/students/' + email)
    .then(function (response) {
      console.log('datas')
      console.log(response.data)
    })
  },
  getProfile (callback) {
    Vue.$http.get('/students/' + localStorage.getItem('email'))
    .then(function (response) {
      callback(response.data)
      return response.dataconsole.log('1234567890')
    })
    .catch(function (response) {
      console.log('CatchGetProfile')
    })
  },
  Edit (editParams, callback) {
    console.log(store)
    Vue.$http.post('/students/edit', editParams)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      console.log('CatchEdit')
    })
      // store.dispatch('signup')
      // callback(response.data)
  }

  // logout (callback) {
  //   console.log(store)
  //   Vue.$http.delete('/users/api_sign_out.json')
  //   .then(function (response) {
  //     store.dispatch('logout')
  //     callback(response.data)
  //   })
  //   .catch(function (response) {
  //     store.dispatch('logout')
  //   })
  // },
  // checkLoggedIn () {
  //   Vue.$http.get('')
  //   .then(function (response) {
  //     store.dispatch('login')
  //   })
  //   .catch(function (response) {
  //     store.dispatch('logout')
  //   })
  // }
}
