<template>   
  <div>
    <div>
        <h1>Shop</h1>
        <img src="@/assets/teaTin.png">
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Shop',
    data () {
       return {
      page: 'shop'
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 5em;
}

img {
  width: 75%;
}
</style>