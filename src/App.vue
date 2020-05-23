<template>
  <div id="app">
    <img class="logo" src="@/assets/logo.png" />
    <Menu />
    <Footer />
  </div>
</template>

<script>
import Menu from './components/Menu';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Menu,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(46, 48, 48);
  margin-top: 60px;
}

.logo {
  width: 11em;
  position: absolute;
  top: 4.8em;
  transform: translate(-50%, -50%);
}

h1 {
  margin-top: 5em;
}

.gallery img {
  margin: 3.5em 0;
  max-width: 680px;
}

@media only screen and (max-width: 600px) {
.gallery img {
    width: 100%;
    height: auto;
  }
}
</style>
