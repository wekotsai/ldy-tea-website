<template>
  <div id="app">
    <Navbar v-bind:navbar="navbar" />

  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'app',
  components: {
    Navbar,

  },
  data() {
    return {
      navbar: [
        {
          id: 1,
          title: "Shop"
        },
        {
          id: 2,
          title: "Our Story"
        },
        {
          id: 3,
          title: "Contact Us"
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
