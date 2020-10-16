<template>
  <h1>Waiting</h1>
</template>

<script>

export default {
  name: 'Waiting',
  computed: {
    users() {
      return this.$store.state.users
    }
  },
  watch: {
    users() {
      if (this.users.length < 2) {
        this.$router.push({name: 'Waiting'})
      } else {
        this.$router.push({name: 'GamePlay'})
      }
    }
  },
  // sockets: {
  //   'user-connected' (users) {
  //     console.log(users, '<<<<< users dari server')
  //     this.users = users
  //     if (this.users.length > 2) {
  //       this.$router.push({name: 'GamePlay'})
  //     }
  //   }
  // },
}
</script>

<style>

</style>