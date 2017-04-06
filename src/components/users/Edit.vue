<template lang="html">
  <div class="edit">
    <md-card class="card-example">
      <md-card-area md-inset><br>
    <md-card-header>
      <center><h2 class="md-title">Edit profile</h2></center>
    </md-card-header>
    <md-card-content>
      <md-input-container>
        <label>Upload your profile picture</label>
        <md-file v-model="registrant.profilePic"></md-file>
      </md-input-container>
      <md-input-container>
        <label>First name</label>
        <md-input v-model="registrant.firstName"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Last name</label>
        <md-input v-model="registrant.lastName"></md-input>
      </md-input-container>
      <md-chips v-model="registrant.workingExperience" md-input-placeholder="Add Work experience">
      <template scope="chip">{{ chip.value }}</template>
      </md-chips>
      <md-chips v-model="registrant.education" md-input-placeholder="Education">
      <template scope="chip">{{ chip.value }}</template>
      </md-chips>
      <md-chips v-model="registrant.skillset" md-input-placeholder="Add your skill set">
      <template scope="chip">{{ chip.value }}</template>
      </md-chips>
    </md-card-content>
    <center><md-button class="md-raised md-primary" @click.native="edit()">Submit</md-button></center>
    </md-card-area>
  </md-card>
  </div>
</template>

<script>
import user from '../../api/users.js'
import router from '../../router'

export default {
  data () {
    return {
      registrant: {
        firstName: '',
        lastName: '',
        telephoneNumber: '',
        email: localStorage.getItem('email'),
        workingExperience: [],
        education: [],
        skillset: [],
        profilePic: ''
      }
    }
  },
  methods: {
    edit () {
      var editForm = {
        firstName: this.registrant.firstName,
        lastName: this.registrant.lastName,
        email: this.registrant.email,
        workingExperience: this.registrant.workingExperience,
        education: this.registrant.education,
        skillSet: this.registrant.skillset,
        profilePic: this.registrant.profilePic
      }
      user.Edit(editForm)
      router.push({ name: 'Users.profile' })
    }
  },
  mounted () {
    user.getProfile(_response => {
      this.items = _response
      console.log(this.items)
      this.registrant.firstName = this.items.firstName
      this.registrant.lastName = this.items.lastName
      this.registrant.telephoneNumber = this.items.telephoneNumber
      this.registrant.workingExperience = this.items.workExperience
      this.registrant.education = this.items.education
      this.registrant.skillset = this.items.skills
    })
    // console.log(product.x)
  }
}
</script>

<style lang="css">
.card-example {
  .md-subhead {
    .md-icon {
      $size: 18px;
      width: $size;
      min-width: $size;
      height: $size;
      min-height: $size;
      font-size: $size;
      line-height: $size;
    }

    span {
      vertical-align: middle;
    }
  }
  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .md-icon {
      margin: 8px;
      color: rgba(#000, .54) !important;
    }

    .md-button {
      border-radius: 2px !important;
    }
  }
}

.img-circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
</style>
