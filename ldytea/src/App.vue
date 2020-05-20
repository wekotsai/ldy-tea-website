<template>
  <div id="app">
    <Banner />
    <Navbar v-bind:navbar="navbar" />
    <Slide>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import { Slide } from 'vue-burger-menu';

export default {
  name: 'app',
  components: {
    Navbar,
    Banner,
    Slide
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
