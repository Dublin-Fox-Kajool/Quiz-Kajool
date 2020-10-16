<template>
  <section class="login-container">
    <div class="custom-login">
      <img src="../assets/login-logo.svg" alt="">
      <div class="login-title-box">
        <h1 class="login-title-font">Enter your name</h1>
      </div>
      <form @submit.prevent="play" class="custom-form">
        <div class="form-group-custom">
          <input
            type="text"
            class="custom-input"
            placeholder="Your name"
            v-model="name"
          />
        </div>
        <button color="primary" type="submit" class="button-login login-text">Play</button>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LandingPage'
}
</script>

<style>
/* LOGIN */
.login-container {
  display: flex;
  justify-content: center;
  width: 500px;
  height: 100vh;
  margin: 0 auto;

}

.login-title-box {
  margin-bottom: 1rem;
}

.login-title-font {
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}

img {
  height: 100%;
  width: 100%;
}

.custom-login {
  box-shadow: 2px 2px 10px 10px #cfcdcd9b;
}
.form-group-custom {
  margin-bottom: 0.625rem;
}
.custom-login {
  border-radius: 0.7rem;
  padding: 3rem 3rem;
  margin: auto;
}
.custom-input {
  border: 1px solid #6c6c72;
  width: 100%;
  margin: 0 auto;
  padding: 0.8rem;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.login-input-text {
  font-weight: 400;
  font-size: 1rem;
  color: #6c6c72;
  float: left;
  margin-bottom: 0.5rem;
}

.login-text {
  letter-spacing: 0.1rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
}

.button-login {
  background-color:#5EB1FC;
  color: white;
  margin: 0.625rem auto;
  padding: 0.8rem;
  width: 100%;
  border-radius: 0.5rem;
  border-color: inherit;
}

.button-login:focus {
  outline: none;
}
</style>
