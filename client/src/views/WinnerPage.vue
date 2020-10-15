<template>
  <div class="winner-container">
    <div class="winner-box">
      <div>
        <h3 class="winner-1-text">The Winner Is :</h3>
        <h3 class="winner-person">Person 1</h3>
        <h5 class="end-score-1">score: 600</h5>
      </div>
      <img src="../assets/winner.svg" alt="">
      <div>
        <h5 class="winner-2-text">Second Winner : Person 2</h5>
        <h5 class="end-score-2">score: 480</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WinnerPage'
}
</script>

<style>

.winner-container {
  height: 100vh;
  padding-top: 6rem;
  background: url('../assets/background.svg');
}

.winner-person {
  font-weight: 900;
  font-size: 3rem;
  color: #DE366A;
}

.winner-box {
  padding-top: 1.2rem;
  border-radius: 1rem;
  margin: 0 auto;
  width: 500px;
  height: 300px;
  background-color: rgba(255, 255, 255);
}

img {
  height: auto;
  width: 350px;
  margin-bottom: 1rem;
}

.winner-1-text {
  font-family: 'Poppins', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: #0E7369;
}

.winner-2-text {
  font-size: 1.5rem;
  font-weight: 500;
  color: #6AB3B7;
}

.end-score-1 {
  font-weight: 900;
  font-size: 2rem;
  color: #FEBE2D;
}
.end-score-2 {
  font-weight: 900;
  font-size: 1.2rem;
  color: #FEBE2D;
}
</style>