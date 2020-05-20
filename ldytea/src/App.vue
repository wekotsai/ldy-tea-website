<template>
  <div id="app">
    <Banner />
    <Navbar v-bind:navbar="navbar" />
    <Slide>
      <a id="home" href="#">
        <span>Home</span>
      </a>
      <a id="aboutus" href="#">
        <span>About Us</span>
      </a>
      <a id="tea" href="#">
        <span>Our Tea</span>
      </a>
      <a id="tea" href="#">
        <span>Contact Us</span>
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

.bm-burger-bars {
  background-color: #373a47;
  border-radius: 3px;
}

.bm-burger-button {
  left: 28px;
  width: 25px;
}

.bm-menu {
  width: 280px;
  background-color:rgb(58, 58, 58, 0.85);
}

.bm-item-list a:hover {
  color: #ffffff;
}

.bm-cross {
  background-color: transparent;
}

.line-style {
  height: 8%;
}
</style>
