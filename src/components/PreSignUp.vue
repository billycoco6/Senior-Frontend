<template lang="html">
  <div class="pre-sign-up">
      <md-list-item>
        <span style="flex: 1"></span>
        <h2>Are you company or person?</h2>
        <span style="flex: 1"></span>
      </md-list-item>
      <br><br><br>
      <div style="width: 30%; float: left; margin-left: 20%" class="img-container" @click="navigateTo('Company.sign_up')">
        <img src="../../static/company.png">
      </div>
      <div style="width: 50%; float: right" class="img-container" @click="navigateTo('Users.sign_up')">
        <img src="../../static/person.png">
      </div>
    </md-list>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'pre-sign-up',
  methods: {
    navigateTo (nav) {
      console.log(nav)
      router.push({name: nav})
    }
  }
}
</script>

<style lang="css">
.img-container {
  width: 150px;

}
</style>
