<template lang="html">
  <div class="posts">
    <div class="row" id="box2">
      <div class="col-md-11">
        <div class="panel panel-default" id = "box">
          <div class="panel-body">
            <div class="col-md-9">
              <p style="font-size:13px">Posted on: {{mynews.postDate}}</p>
              <h3 style="font-size:18px">
                <a @click="navigateTo('Posts.page')">{{mynews.JobName}}
                </a>
              </h3>
              <p>
                <span class="glyphicon glyphicon-briefcase"></span>&nbsp;{{mynews.JobPlace}}
              </p>
              <p style="font-size:14px">
                <span class="glyphicon glyphicon-map-marker"></span>&nbsp;{{mynews.JobLocations}}
              </p>
              <p style="font-size:14px">{{mynews.JobDescriptionShort}}<br/>
                <span :id='mynews.index' class="collapse">{{mynews.JobDescriptionLong}}</span>
                <div href="#" class="btn btn-primary" data-toggle="collapse" :data-target='"#"+mynews.index'>More Info...
                </div>&nbsp;&nbsp;
                <div v-link="{ name: 'foo', params: { userId: mynews.index }}" href="#" class="btn btn-info" @click="addFav()">Add to Fovourite
                </div>&nbsp;&nbsp;
                <div href="#" class="btn btn-warning" data-toggle="modal" :data-target='"#modal"+mynews.index'>Apply
                </div>
              </p>
            </p>
          </div>
            <div class="col-md-3">
              <a @click="navigateTo(mynews.CompanyName)">
                <img :src="imgUrl(mynews.ImageLogo)">
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal Part -->
      <div class="modal fade" :id="'modal'+mynews.index" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    	  <div class="modal-dialog" role="document">
    	    <div class="modal-content">
    	      <div class="modal-header">
    	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    	        <h4 class="modal-title" id="myModalLabel">{{mynews.JobPlace}}</h4>
    	      </div>
    	      <div class="modal-body">
    	        <img src = "../../assets/image/724l.jpg" height="195" width="578" />
    	                      <h2>{{mynews.JobName}}</h2>
    	                      <p>
    	              Position: {{mynews.Position}}<br/>
    	              Level: {{mynews.level}} <br/>
    	              Work Location: {{mynews.JobLocations}}</p>
    	              <p>Qualifications:</p>
    	              <ul>
    	                <li v-for="item in mynews.Qualifications">{{item}}</li>
    	              </ul>
    	      </div>
    	      <div class="modal-footer">
              <div class="my_button">
    	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    	        <button type="button" class="btn btn-primary" @click="applyJob(mynews.CompanyEmail)">Apply Now</button>
              </div>
            </div>
    	    </div>
    	  </div>
    	</div>
      <!-- END Modal Part -->
    </div>
  </div>
</template>

<script>
import router from '../../router'
import messagesApi from '../../api/messages'
var images = require.context('../../assets/image/', false, /\.(jpg|png|JPG|PNG)$/)
export default {
  name: 'posts',
  props: ['mynews'],
  methods: {
    imgUrl: function (path) {
      return images('./' + path)
    },
    navigateTo (nav) {
      console.log(nav)
      router.push({
        name: nav,
        params: {
          id: this.mynews.index,
          JobName: this.mynews.JobName,
          JobPlace: this.mynews.JobPlace,
          JobLocations: this.mynews.JobLocations,
          JobDescriptionShort: this.mynews.JobDescriptionShort,
          JobDescriptionLong: this.mynews.JobDescriptionLong,
          ImageLogo: this.mynews.ImageLogo,
          postDate: this.mynews.postDate,
          level: this.mynews.level,
          Qualifications: this.mynews.Qualifications
        }
      })
    },
    applyJob (companyEmail) {
      var app = this
      var messageParams = {
        sender: localStorage.getItem('email'),
        receiver: 'hello@muic.com',
        title: 'Request for job position',
        message: localStorage.getItem('email') + ' has applied to ' + app.mynews.JobName
      }
      console.log(messageParams)
      messagesApi.sendMessages(messageParams)
    },
    addFav: function () {
      this.$emit('update', this.mynews.index)
    }
  }
}
</script>

<style>
a:hover{
    cursor: pointer;
  }
#box{
    background: rgba(255, 255, 255, 0.7);
}
.posts:first-child{
    margin-top: 20px;
}
</style>
