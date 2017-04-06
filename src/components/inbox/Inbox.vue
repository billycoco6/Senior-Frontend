<template lang="html">
  <div class="inbox">
    <inbox-component></inbox-component>
  </div>
</template>

<script>

export default {
  data () {
    return {
      email: ''
    }
  },
  components: {
    InboxComponent: require('./InboxList')
  }
}
</script>

<style lang="css">
</style>
