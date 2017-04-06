<template>
  <div class="single-message">
    <div class="phone-viewport">
      <md-list-item>

        <md-avatar>
          <img :src="message.profilePicture" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>{{ message.sender }}</span>
          <span>{{ message.title }}</span>
          <p>{{ message.message }}</p>
        </div>

        <md-button class="md-icon-button md-list-action" data-toggle="modal" :data-target='"#modal"+message.index'>
          <md-icon class="md-primary">mail</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>
    </div>


    <!-- Modal Part Start -->
    <div class="modal fade" :id="'modal'+message.index" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">From: {{message.sender}}</h4>
          </div>
          <div class="modal-body">
            <h4>{{message.title}}</h4>
            <p>
              {{message.message}}<br/>
            </p>
          </div>
          <div class="modal-footer">
            <div class="my_button">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Part End -->

  </div>
</template>

<script>
import messagesApi from '../../api/messages.js'

export default {
  // data () {
  //   return {
  //
  //   }
  // },
  props: ['message'],
  methods: {
    loadInbox () {
      var app = this
      messagesApi.getMessages(app.email)
    }
  }
}
</script>

<style lang="css">
</style>
