<template>
  <div class="list">
    <md-list class="custom-list md-triple-line">
      <each-message v-for="eachMessage in messageDetail" :message='eachMessage'></each-message>
    </md-list>
  </div>

</template>

<script>
export default {
  components: {
    eachMessage: require('./SingleMessage')
  },
  data () {
    return {
      messageDetail: [
        {
          index: 1,
          profilePicture: 'https://placeimg.com/40/40/people/1',
          sender: 'Ali Connors',
          title: 'Brunch this weekend?',
          message: 'I will be in your neighborhood doing errands...',
          senderEmail: 'hello@world.com'
        },
        {
          index: 2,
          profilePicture: 'https://placeimg.com/40/40/people/6',
          sender: 'me, Scott, Jennifer',
          title: 'Summer BBQ',
          message: 'Wish I could come, but I am out of town ...',
          senderEmail: 'hello@world.com'
        },
        {
          index: 3,
          profilePicture: 'https://placeimg.com/40/40/people/5',
          sender: 'Sandra Adams',
          title: 'Oui oui',
          message: 'Do you have any Paris recommendation?',
          senderEmail: 'hello@world.com'
        },
        {
          index: 4,
          profilePicture: 'https://placeimg.com/40/40/people/8',
          sender: 'Trevor Hansen',
          title: 'Order confirmation',
          message: 'Thank you for your recent order from ...',
          senderEmail: 'hello@world.com'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
