<template>
  <div>
    <h1>About us</h1>
    <div class="gallery">
      <p> 蔡(Tsai) 是希臘文的 Tea (τσάι) <br> 我們全家人都特別的愛茶 </p>
      <img src="@/assets/about.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
    data () {
       return {
      page: 'about'
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 2em;
}
</style>