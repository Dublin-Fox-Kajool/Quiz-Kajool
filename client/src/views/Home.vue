<template>
  <section class="wrapper">
    <GamePlay v-if="isStart == true"></GamePlay>
    <h1 v-else>Waiting another player</h1>
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
      return this.users.length >= 2
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
