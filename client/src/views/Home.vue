<template>
  <section class="wrapper">
    <!-- NAVBAR -->
    <nav class="navbar">
      <label class="question">Siapakah penemu kereta api?</label>
    </nav>

    <!-- IMAGE SECTION -->
    <div class="content">
      <div class="box-question">
        <img src="https://ferdfound.files.wordpress.com/2014/12/george-stephenson-_663_382.png" alt="">
      </div>

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
        <div class="answer-1"><label class="question-name">George Stephenson</label></div>
        <div class="answer-2"><label class="question-name">George Washington</label></div>
      </div>
      <div class="ans-box">
        <div class="answer-3"><label class="question-name">James Watt</label></div>
        <div class="answer-4"><label class="question-name">James Clear</label></div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
  height: 6rem;
  box-shadow: 2px 1px 3px 2px #0c5e73;
}

.question {
  font-family: 'Roboto', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 auto;
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



img {
  margin-top: 1rem;
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  object-fit: cover;
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
  font-size: 2rem;

}
</style>
