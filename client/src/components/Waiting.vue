<template>
  <h1>Waiting</h1>
</template>

<script>

export default {
  name: 'Waiting',
  sockets: {
    'user-connected' (users) {
      console.log(users, '<<<<< users dari server')
      this.users = users
      if (this.users.length >= 2) {
        this.$router.push({name: 'GamePlay'})
      }
    }
  },
}
</script>

<style>

</style>