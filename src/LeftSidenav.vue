<template lang="html">
  <div class="left-sidenav">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">MUIC Jobs Cloud</h2>
      <div class="absolute">
        <a @click="navigateTo('Users.profile')">
          <md-avatar class="md-avatar-icon">
            <md-icon>account_circle</md-icon>
          </md-avatar>
        </a>
      </div>
      <div class="name">
        <p>{{email}}</p>
      </div>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Menu</h3>
        </div>
        <md-list>
          <div class="sidebar-avatar center">
            <md-avatar class="md-avatar-icon md-large">
              <md-icon>account_circle</md-icon>
            </md-avatar>
          </div>
          <md-list-item>
            <router-link :to="{ name: 'Posts.index' }"><md-icon>explore</md-icon> <span>Feeds</span></router-link>
          </md-list-item>
          <md-list-item>
            <router-link :to="{ name: 'main.inbox' }"><md-icon>move_to_inbox</md-icon> <span>Inbox</span></router-link>
          </md-list-item>
          <md-list-item>
            <a @click="logout"><md-icon>power_settings_new</md-icon><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLog out</span></a>
          </md-list-item>
        </md-list>
      </md-toolbar>
    </md-sidenav>
  </div>
</template>

<script>
import router from './router'
import usersApi from './api/users'

export default {
  data () {
    return {
      email: localStorage.getItem('email')
    }
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    navigateTo (nav) {
      router.push({ name: nav })
    },
    logout () {
      usersApi.logOut()
    }
  }
}
</script>

<style lang="css">
.sidebar-avatar {
  margin-top: 20px;
  margin-bottom: 20px;
}
.center {
    margin: auto;
    width: 30%;
    padding: 10px;
}
.absolute {
    position: absolute;
    right: 20px;
    width: 15%;
}
.name {
    position: absolute;
    right: 2%;
    width: 100px;
    margin-top: 5px;
}
</style>
