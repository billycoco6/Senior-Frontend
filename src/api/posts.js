import Vue from 'vue'

export default {
  getPost (callback) {
    Vue.$http.get('/post')
    .then(function (response) {
      callback(response.data)
      return response.dataconsole.log('1234567890')
    })
    .catch(function (response) {
      console.log('CatchGetProfile')
    })
  },
  createPost (params, callback, errCallback) {
    var postParams = params
    console.log(postParams)
    Vue.$http.post('/post.json', postParams)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}
