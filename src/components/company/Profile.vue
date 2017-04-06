<template lang="html">

  <div class="profile">
    <md-card class="card-example">
      <md-card-area md-inset><br>
    <center><img class="img-circle" src="../../assets/test.png"></center>
    <md-card-header>
      <center><h2 class="md-title">Profile</h2></center>
    </md-card-header>
    <md-card-content>
      <p>Company name:    {{ registrant.companyName }}     </p>
      <p>Company description:  {{ registrant.companyDescription }}         </p>
      <p>E-mail:    {{ registrant.email }}             </p>
      <p>Telephone number:  {{ registrant.phoneNumber }}     </p>
    </md-card-content>
    <center><md-button class="md-raised md-primary" @click.native="editProfile()">Edit profile</md-button></center>
  </md-card-area>
</md-card>

<md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
    <md-dialog-title>Create a new job post</md-dialog-title>

    <md-dialog-content>
      <form>
        <md-input-container>
          <label>Job Title</label>
          <md-textarea v-model="form.jobTitle"></md-textarea>
        </md-input-container>
        <md-input-container>
          <label>Job Description</label>
          <md-textarea v-model="form.jobDescription"></md-textarea>
        </md-input-container>
        <md-input-container>
          <label>Location</label>
          <md-textarea v-model="form.jobLocation"></md-textarea>
        </md-input-container>
      </form>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
      <md-button class="md-primary" @click.native="submitNewPost">Submit</md-button>
    </md-dialog-actions>
  </md-dialog>

  <md-button class="md-fab md-fab-bottom-right" id="fab" @click.native="openDialog('dialog2')">
    <md-icon>add</md-icon>
  </md-button>
  </div>

</template>

<script>
import router from '../../router'
import company from '../../api/company.js'
import postsApi from '../../api/posts.js'

export default {
  data () {
    return {
      registrant: {
        companyName: '',
        companyDescription: '',
        email: '',
        phoneNumber: ''
      },
      form: {
        jobTitle: '',
        jobDescription: '',
        jobLocation: '',
        companyEmail: localStorage.getItem('email'),
        requestStudent: '',
        approvedStudent: ''
      }
    }
  },
  methods: {
    editProfile () {
      router.push({ name: 'Users.edit' })
      console.log('yayy')
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    },
    submitNewPost () {
      var app = this
      postsApi.createPost(app.form)
    }

  },
  mounted () {
    company.getCompanyProfile(_response => {
      this.items = _response
      console.log(this.items)
      this.registrant.companyName = this.items.companyName
      this.registrant.companyDescription = this.items.companyDescription
      this.registrant.email = this.items.email
      this.registrant.phoneNumber = this.items.phoneNumber
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
