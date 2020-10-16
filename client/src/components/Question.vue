<template>
  <label class="question" v-text="question"></label>
</template>

<script>
export default {
  name: 'Question',
  props: ['question'],
  data() {
    return {
      value: this.question
    }
  },
}
</script>

<style>
.question {
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  font-weight: 300;
  margin: 0 auto;
}
</style>