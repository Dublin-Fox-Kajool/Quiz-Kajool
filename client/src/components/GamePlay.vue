<template>
  <section class="wrapper">
    <!-- NAVBAR -->
    <nav class="navbar">
      <Question :question="question.question" />
    </nav>

    <!-- IMAGE SECTION -->
    <div class="content">
      <ImageQuestion :imageSrc="question.image_url" />

      <!-- <div class="skip">
        <h3 class="skip-text">SKIP</h3>
      </div> -->

      <!-- <div class="total">
        <h1 class="total-title">0</h1>
        <h3 class="total-text">Answers</h3>
      </div> -->
    </div>

    <!-- ANSWER SECTION -->
    <div class="selection">
      <div class="ans-box">
        <OptionDiv :classList="'answer-1'" :optionName="question.choice1" @setOption="setOption" />
        <OptionDiv :classList="'answer-2'" :optionName="question.choice2" @setOption="setOption" />
      </div>
      <div class="ans-box">
        <OptionDiv :classList="'answer-3'" :optionName="question.choice3" @setOption="setOption" />
        <OptionDiv :classList="'answer-4'" :optionName="question.choice4" @setOption="setOption" />
      </div>
    </div>
  </section>
</template>

<script>
import OptionDiv from '@/components/OptionDiv'
import Question from '@/components/Question'
import ImageQuestion from '@/components/ImageQuestion'

export default {
  name: "GamePlay",
  data() {
    return {
      question: null,
      counter: 0,
      saveInterval: null
    }
  },
  components: {
    OptionDiv,
    Question,
    ImageQuestion
  },
  sockets: {
    'question-send' (question) {
      this.question = question
      this.counter++
    }
  },
  computed: {
  },
  created() {
    this.pollData()
  },
  methods: {
    setOption(answer) {
      alert(answer)
    },
    pollData() {
      this.$socket.emit('question-request', this.counter)
      let interval = setInterval(() => {
        this.$socket.emit('question-request', this.counter)
      }, 10000)
      setTimeout(() => {
        clearInterval(interval)
      }, 50000);
    }
  }
}
</script>

<style>
.wrapper {
  height: 100vh;
  background: url('../assets/background.svg');
  background-size: cover;
}

.navbar {
  background-color: #fff;
  color: #0c5e73;
  display: flex;
  align-items: center;
  min-height: 6rem;
  box-shadow: 2px 1px 3px 2px #0c5e73;
}

.question {
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 auto;
}

.content {
  position: relative;
  margin-top: 4rem;
  margin-bottom: 2rem;
  height: 45vh;
}

/* .skip {
  background-color: #CC575E;
  border-radius: 0.8rem;
  padding: 0.5rem 1.5rem;
  position: absolute;
  right: 4vw;
  top: -1vh;
  cursor: pointer;
}

.skip-text {
  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
} */

.total {
  border-radius: 0.8rem;
  padding: 0.5rem 1.5rem;
  position: absolute;
  left: 4vw;
  top: 9vh;
  cursor: default;
  color: #18A58F;
}

.total-title {
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 7rem;
}

.total-text {
  font-style: italic;
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 900;
}

.box-question {
  margin: 0 auto;
  height: 43vh;
  width: 550px;
}

.selection {
  display: flex;
  height: 22vh;
  justify-content: space-around;
}

.answer-1 {
  color: #fff;
  background-color:#DF222D;
  font-weight: 700;
  display: flex;
  justify-content: center;
  height: 12vh;
  width: 35vw;
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
  width: 35vw;
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
  width: 35vw;
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
  width: 35vw;
  border-radius: 0.6rem;
  margin-bottom: 0.6rem;
  text-align: center;
  cursor: pointer;
}

.question-name {
  display: flex;
  align-self: center;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  cursor: pointer;
}
</style>