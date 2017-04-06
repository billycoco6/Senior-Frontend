<template>
  <div class="list">
    <md-list class="custom-list md-triple-line">
      <each-message v-for="eachMessage in messageDetail" :message='eachMessage'></each-message>
    </md-list>
  </div>

</template>

<script>
import usersApi from '../../api/users'
import companyApi from '../../api/company'

export default {
  components: {
    eachMessage: require('./SingleMessage')
  },
  data () {
    return {
      messageDetail: []
    }
  },
  mounted () {
    if (localStorage.getItem('userType') === 'student') {
      usersApi.userDetail(localStorage.getItem('email'), _response => {
        console.log('student start')
        this.items = _response.message
        console.log(this.items)
        this.messageDetail = this.items
      })
    } else if (localStorage.getItem('userType') === 'company') {
      companyApi.getCompanyProfile(_response => {
        console.log('this should print')
        this.items = _response.message
        console.log(this.items)
        this.messageDetail = this.items
      })
    }
  }
}
</script>

<style lang="css">
</style>
