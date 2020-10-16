<template>
  <section class="wrapper">
    <!-- NAVBAR -->
    <nav class="navbar">
      <Question :question="question.question" />
    </nav>

    <!-- IMAGE SECTION -->
    <div class="content">
      <ImageQuestion :imageSrc="question.image_url" />

      <div class="skip">
        <h3 class="skip-text">SKIP</h3>
      </div>

      <div class="total">
        <h1 class="total-title">0</h1>
        <h3 class="total-text">Answers</h3>
      </div>
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
      let interval = setInterval(() => {
        this.$socket.emit('question-request', this.counter)
      }, 5000)
      setTimeout(() => {
        clearInterval(interval)
      }, 25000);
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
  height: 15%;
  box-shadow: 2px 1px 3px 2px #0c5e73;
}

.content {
  position: relative;
  margin-top: 4rem;
  margin-bottom: 2rem;
  height: 45vh;
}

.skip {
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
}

.total {
  border-radius: 0.8rem;
  padding: 0.5rem 1.5rem;
  position: absolute;
  left: 8vw;
  top: 9vh;
  cursor: default;
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
  height: 40vh;
  width: 500px;
}

.selection {
  display: flex;
  height: 22vh;
  justify-content: space-around;
}
</style>