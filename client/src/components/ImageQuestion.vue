<template>
  <div class="box-question">
    <img class="img-question" :src="imageSrc" alt="">
  </div>
</template>

<script>
export default {
  name: 'ImageQuestion',
  props: ['imageSrc'],
  data() {
    return {
      value: this.imageSrc
    }
  },
}
</script>

<style>
.img-question {
  margin-top: 1rem;
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  /* object-fit: scale-down; */
  background-size: fill;
}
</style>