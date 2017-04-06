import Vue from 'vue'

export default {
  getPosts (callback, errCallback) {
    Vue.$http.get('/post.json')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  getPost (uid, callback, errCallback) {
    // Formatted string in JS is wrapped by ` not '
    Vue.$http.get(`/post/${uid}.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
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
