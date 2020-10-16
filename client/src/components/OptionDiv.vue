<template>
  <div :class="classList">
    <a class="question-name" @click.prevent="setCurrentQuestion" v-text="optionName"></a>
  </div>
</template>

<script>
export default {
  name: 'OptionDiv',
  props: ['optionName', 'classList'],
  data() {
    return {
      value: this.optionName
    }
  },
  methods: {
    setCurrentQuestion() {
      this.$emit('setOption', this.optionName)
    }
  },
}
</script>

<style>

.answer-1 {
  color: #fff;
  background-color:#DF222D;
  font-weight: 700;
  display: flex;
  justify-content: center;
  height: 12vh;
  width: 30vw;
  border-radius: 0.6rem;
  margin-bottom: 0.6rem;
  text-align: center;
  cursor: pointer;
}
.answer-2 {
  color: #fff;
  background-color: #1DA1E3;
  font-weight: 700;
  display: flex;
  justify-content: center;
  height: 12vh;
  width: 30vw;
  border-radius: 0.6rem;
  margin-bottom: 0.6rem;
  text-align: center;
  cursor: pointer;
}
.answer-3 {
  color: #fff;
  background-color: #D69C23;
  font-weight: 700;
  display: flex;
  justify-content: center;
  height: 12vh;
  width: 30vw;
  border-radius: 0.6rem;
  margin-bottom: 0.6rem;
  text-align: center;
  cursor: pointer;
}
.answer-4 {
  color: #fff;
  background-color: #21CF71;
  font-weight: 700;
  display: flex;
  justify-content: center;
  height: 12vh;
  width: 30vw;
  border-radius: 0.6rem;
  margin-bottom: 0.6rem;
  text-align: center;
  cursor: pointer;
}
.question-name {
  display: flex;
  align-self: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
}

</style>