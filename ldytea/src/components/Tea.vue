<template>
  <div>
    <div class="container">
       <h1>Our Tea</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tea',
    data () {
       return {
      page: 'tea'
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 5em;
  z-index: 1;
}

.container {
    background-image: url('~@/assets/teaCups.jpg');
    background-repeat: no-repeat;
    background-position: center;
    height: 38em;
}
</style>