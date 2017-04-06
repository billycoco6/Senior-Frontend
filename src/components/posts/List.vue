<template>
	<div class="myFeed">
    <div class="row">
        <div class="col-xs-3">
        </div>
        <div class="col-xs-5">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3">
          <input v-model="searchText" type = "text" placeholder="Search Your Job Here ..." id = "search">
          <div class = "row" id = "myFavorite">
            <a @click="allPost()">
              <div id = "testFav">
                <h1 id = "favor-text"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;&nbsp;SHOW ALL POSTS
                </h1>
              </div>
            </a>
            <a @click="myFav()">
              <div id = "testFav">
                <h1 id = "favor-text"><span class="glyphicon glyphicon-star"></span>&nbsp;&nbsp;MY FAVOURITE
                </h1>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xs-9">
	       <our-news v-for="get in allPost" :mynews='get' @update="onStep1Update"></our-news>
        </div>
      </div>
	</div>
</template>

<script>
import post from '../../api/posts.js'
var moment = require('moment')
export default {
  props: ['feeds'],
  components: {
    OurNews: require('./Block')
  },
  data () {
    return {
      newDat: [
        {
          index: 1,
          CompanyEmail: 'hello@world.com',
          JobName: 'IT Auditor (Information Risk Management)',
          JobPlace: 'KPMG Phoomchai Audit Ltd.',
          JobLocations: 'Sathorn',
          JobDescriptionShort: 'Our IT Audit processionals help organizations enhance the effectiveness and efficiency of critical in-house governance, internal audit and regulatory compliance functions.',
          JobDescriptionLong: 'By focusing on regulatory and compliance, we help clients proactively comply with regulatory requirements (including SOX regulations) as well as effectively secure and monitor systems and data to help improve the compliance functions. We help mitigate regulatory and compliance risks that could lead to losses from non-compliance, litigation, or regulatory and compliance risks that could lead to losses from non-compliance, litigation, or regulatory sanctions and fines.',
          ImageLogo: 'IT_Auditor.jpg',
          postDate: moment(new Date(2016, 0, 2)).format('DD/MMM/YYYY'),
          level: 'Staff',
          Position: 'IT Auditor Staff',
          Qualifications: [
            'Male, Female age 22-27 years olds',
            "Bachelor's degree in Accounting",
            '0-3 years experience in Internal Auditor, Auditor,Accounting',
            'Computer literacy (MS office)',
            'Good command of English both speaking and writing'
          ]
        }
      ],
      newData: [
      ],
      allPost: [],
      newOne: [],
      passList: {},
      searchText: '',
      myFavorite: []
    }
  },
  mounted: function () {
    this.newDat.sort(function (a, b) {
      var c = new Date(a.postDate)
      var d = new Date(b.postDate)
      return d - c
    })
    this.newOne = this.newDat
    post.getPost(_response => {
      this.items = _response
      this.allPost = this.items
      console.log(this.allPost)
    })
  },
  computed: {
    list: function () {
      var instance = this
      if (this.searchText.length === 0) {
        return this.newOne
      }
      if (this.searchText.length > 0) {
        return this.newOne.filter(function (item) {
          return item.JobName.toLowerCase().indexOf(instance.searchText.toLowerCase()) > -1
        })
      }
    }
  },
  methods: {
    allPost: function () {
      this.newDat.sort(function (a, b) {
        var c = new Date(a.postDate)
        var d = new Date(b.postDate)
        return d - c
      })
      this.newOne = this.newDat
    },
    myFav: function () {
      var instance = this
      this.newOne = this.newOne.filter(function (item) {
        var i
        for (i in instance.myFavorite) {
          if (item.index === instance.myFavorite[i]) {
            return item
          }
        }
      })
    },
    onStep1Update: function (newData) {
      var i
      for (i in this.myFavorite) {
        if (newData === this.myFavorite[i]) {
          alert('You already have it as your favourite list')
          return
        }
      }
      alert('Add Success')
      this.myFavorite.push(newData)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
#search{
    width: 96%;
    padding: 7px 14px;
    margin: 2px 1px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-right: 37px;
    opacity: 0.9;
    margin-top: 20px;
    font-size: 13px;
}
#sidepost{
  background: rgba(255, 255, 255, 0.7);
  margin-top: 20px;
}
div#myFavorite {
    background-color: #01579b;
    opacity: 0.9;
    width: 97%;
    height: 98px;
    margin-top: 14px;
    margin-left: -1px;
}
h1#favor-text {
        color: white;
    font-style: normal;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    margin-top: 0px;
    margin-left: 19px;
}
#myFavorite a{
  text-decoration: none;
  background-color: black;
  height: 38px;
  width: 100%;
}
#testFav{
    height: 38px;
    width: 96%;
    padding-top: 10px;
    border-bottom: 2px solid white;
    transition: all 0.3s ease;
}
#testFav:hover{
  background-color: #073050;
  height: 38px;
  width: 100%;
  border-right: 2px solid yellow;
}
</style>
