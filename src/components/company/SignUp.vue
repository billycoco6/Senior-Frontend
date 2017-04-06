<template lang="html">
  <div class="sign-up">
      <h2>Register</h2>
      <md-input-container>
        <label>Company Name</label>
        <md-input v-model="registrant.companyName"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Company Description</label>
        <md-input v-model="registrant.companyDescription" ></md-input>
      </md-input-container>

      <md-input-container>
        <label>Phone Number</label>
        <md-input v-model="registrant.phoneNumber"></md-input>
      </md-input-container>

      <md-input-container>
        <label>E-Mail</label>
        <md-input v-model="registrant.email"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Password</label>
        <md-input v-model="registrant.password" type="password"></md-input>
      </md-input-container>

      <md-input-container md-has-password>
        <label>Confirm Password</label>
        <md-input v-model="registrant.confirmPassword" type="password"></md-input>
      </md-input-container>

      <md-snackbar md-position="bottom center" ref="snackbar" :md-duration="duration">
        <span>{{ error }}</span>
        <md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>
      </md-snackbar>

        <md-button class="md-raised md-primary" @click.native="signup">Join Now</md-button>
  </div>
</template>

<script>
import CompanyApi from '../../api/company.js'

export default {
  name: 'sign-up',
  data () {
    return {
      registrant: {
        companyName: '',
        companyDescription: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      error: '',
      userType: 'company',
      duration: 2000
    }
  },
  methods: {
    signup () {
      var app = this
      var signupForm = {
        companyName: app.registrant.companyName,
        companyDescription: app.registrant.companyDescription,
        phoneNumber: app.registrant.phoneNumber,
        email: app.registrant.email,
        password: app.registrant.password,
        userType: app.userType
      }
      console.log(app.signupForm)
      if (app.registrant.password !== app.registrant.confirmPassword) {
        app.error = 'password and confirm password do not match'
        this.open()
      } else if (signupForm.companyName === '' || signupForm.companyDescription === '' || signupForm.phoneNumber === '' ||
          signupForm.email === '' || signupForm.password === '') {
        app.error = 'please do not leave any field blank'
        this.open()
      } else {
        console.log('==== Successful ====')
        console.log(signupForm)
        app.errorShow = false
        CompanyApi.signUp(signupForm)
      }
    },
    open () {
      console.log('==== Snackbar Triggered ====')
      this.$refs.snackbar.open()
    }
  }
}
</script>

<style lang="css">
</style>
