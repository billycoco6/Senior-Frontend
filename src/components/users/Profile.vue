<template lang="html">
  <div class="profile">
    <md-card class="card-example">
      <md-card-area md-inset><br>
    <center><img class="img-circle" src="../../assets/test.png"></center>
    <md-card-header>
      <center><h2 class="md-title">Profile</h2></center>
    </md-card-header>
    <md-card-content>
      <p>First name:  {{ registrant.firstName }}   </p>
      <p>Last name:   {{ registrant.lastName }}      </p>
      <p>E-mail:       {{ registrant.email }}          </p>
      <div v-for="item in registrant.workingExperience">
          <p> Working experience: {{ item }} </p>
      </div>
      <div v-for="item in registrant.education">
          <p> Education:   {{ item }} </p>
      </div>
      <div v-for="item in registrant.skillSet">
          <p>Skillset:    {{ item }}   </p>
      </div>
    </md-card-content>
    <center><md-button class="md-raised md-primary" @click.native="editProfile()">Edit profile</md-button></center>
  </md-card-area>
</md-card>
  </div>

</template>

<script>
import router from '../../router'
import user from '../../api/users.js'
export default {
  data () {
    return {
      registrant: {
        firstName: '',
        lastName: '',
        email: '',
        telephoneNumber: '',
        workingExperience: [],
        education: [],
        skillSet: [],
        profilePic: ''
      }
    }
  },
  methods: {
    editProfile () {
      router.push({ name: 'Users.edit' })
      console.log('yayy')
    }
  },
  mounted () {
    user.getProfile(_response => {
      this.items = _response
      // console.log(this.items)
      this.registrant.firstName = this.items.firstName
      this.registrant.lastName = this.items.lastName
      this.registrant.email = this.items.email
      this.registrant.telephoneNumber = this.items.telephoneNumber
      this.registrant.workingExperience = this.items.workExperience
      this.registrant.education = this.items.education
      this.registrant.skillSet = this.items.skills
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
