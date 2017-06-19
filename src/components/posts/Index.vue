<template>
  <div class="posts">
    <div class="container">
      <div class="center">
        <h1 class="header-text">Dashboard</h1>
      </div>
      <div>
      </div>
      <feeds-component-box class="row" id="myPos"></feeds-component-box>
    <!-- <div class="row">
        <div class = "col-md-6">
            <button type="button" class="btn btn-danger btn-block" @click="limitNumber += 2">SHOW MORE...</button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import PostsApi from '../../api/posts.js'
export default {
  name: 'posts',
  components: {
    FeedsComponentBox: require('./List')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans|Oswald|Roboto');

  .posts {
    padding: 0 10px;
    background-image: url("../../assets/image/office.jpg");
    background-attachment: fixed;
    background-size: 100% 100%;
    position: relative;
    min-height:100vh;
  }
  .center {
      margin-left: 300px;
      width: 50%;
      padding: 10px;
  }
  .header-text {
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    border: 2px solid #f5f3f3;
    padding: 10px;
    border-bottom-style: solid;
    text-align: center;
  }
  #mypos{
    position: relative;
    margin-top: 30px;
  }
</style>
