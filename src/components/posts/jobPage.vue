<template>
<div id = "modal">
	<div class = "row">
				<div class="col-xs-2">
				</div>
				<div class="col-xs-8" id="myCon">
									<div class="panel panel-default" id="box">
									<div class="panel-body">
									<div class="row">
											<div class="col-xs-9">
											<h3 style="color: rgb(39, 43, 54)">{{$route.params.JobName}}</h3><br>
											<p class="page-p" style="color: rgb(99, 13, 96); font-size: 21px;">{{$route.params.JobPlace}}</p>
											<p class="page-p" style="font-size: 12px; color: #000; font-weight: 400">
												<span style="color: #5d5d5d" class="glyphicon glyphicon-briefcase"></span>&nbsp;{{$route.params.JobLocations}}&nbsp;&nbsp;
												<span style="color: #5d5d5d" class="glyphicon glyphicon-time"></span> Posted on: {{$route.params.postDate}}
											</p>
										  </div>
											<div class="col-xs-3">
												<img :src="imgUrl($route.params.ImageLogo)" class="img-responsive">
											</div>
								  </div>
									<h4 class="page-h4">About Company</h4>
									<p class="page-p">
										 {{$route.params.JobDescriptionShort}}  <br />
										 {{$route.params.JobDescriptionLong}}
									</p>
									<h4 class="page-h4">Job Description</h4>
									<p class="page-p" style="font-weight: 600;margin-top: 15px">Job Requirement: </p>
									<ul>
										<li v-for="n in $route.params.Qualifications">{{n}}</li>
									</ul>
									<h4 class="page-h4">Applied Students</h4>
									<div>
									<template v-for="n in 12">
											<a class="trans" href="#" style="text-decoration: none;">david kaap</a>
											<div v-if="(n)%4 == 0">
												<br />
											</div>
									</template>
									</div>
									<div id="butn">
										<button type="button" class="btn btn-primary btn-md">Apply</button>
										<button type="button" @click="navigateTo('Posts.index')" id = "back-but" class="btn btn-warning btn-md">Back</button>
									</div>
									</div>
								</div>
			  </div>
	</div>
</div>
</template>

<script>
import router from '../../router'
// import VueLocalStorage from 'vue-localstorage'
var images = require.context('../../assets/image/', false, /\.(jpg|png|JPG|PNG)$/)

export default {
  name: 'modal',
  props: ['page'],
  methods: {
    imgUrl: function (path) {
      return images('./' + path)
    },
    navigateTo (nav) {
      router.push({ name: nav })
    }
  },
  data () {
    return {
      id: 'unknow',
      JobName: 'unknow',
      JobPlace: 'unknow',
      JobLocations: 'unknow',
      JobDescriptionShort: 'unknow',
      JobDescriptionLong: 'unknow',
      ImageLogo: 'unknow',
      postDate: 'unknow',
      level: 'unknow',
      Qualifications: []
    }
  },
  mounted: function () {
    localStorage.setItem('id', this.$route.params.id)
    this.id = localStorage.getItem('id')
    localStorage.setItem('JobName', this.$route.params.JobName)
    this.JobName = localStorage.getItem('JobName')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
.page-h1 {
	font-family: 'Roboto',serif;
  font-weight: 400;
	font-size: 19px;
	margin-bottom: 15px;
}
.page-p {
	font-family: Arial, Helvetica, sans-serif;
}
.page-h4{
	font-family: Arial, Helvetica, sans-serif;
	font-size: 18px;
  font-weight: 400;
  position: relative;
  color: rgb(10, 75, 122);
  margin-bottom: 10px;
	margin-top: 30px;
}
.trans{
	margin-top: 25px;
	margin-left: 20px;
	padding-top: 5px;
	padding-right: 8px;
	padding-bottom: 5px;
	padding-left: 8px;
	font-size: 12px;
	margin-right:7px;
	transition: all 0.3s ease;
}
.trans:hover{
	color: white;
	background-color: #337ab7
}
#butn{
	float: right;
	margin-right: 20px;
}
#modal{
	padding: 0 10px;
	background-image: url("../../assets/image/office.jpg");
	background-attachment: fixed;
	background-size: 100% 100%;
}
#myCon{
	margin-top: 20px;
}
</style>
