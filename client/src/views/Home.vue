<template>
  <section class="wrapper">
    <Gameplay></Gameplay>
  </section>
</template>

<script>
import GamePlay from '../components/GamePlay'
export default {
  name: 'Home',
  data() {
    return {
      users: []
    }
  },
  components: {
    GamePlay
  },
  computed: {
    isStart() {
      
    }
  },
  created() {
    if (this.users < 2) {
      this.$router.push({name: 'Waiting'})
    } else {
    }
  },
  sockets: {
    'user-connected' (users) {
      console.log(users, '<<<<< users dari server')
      this.users = users
    }
  },
  methods: {
  },
}
</script>

<style>
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
