<template>
  <div id="app">
    <img class="logo" src="@/assets/logo.png" />
    <Menu />
  </div>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: 'app',
  components: {
    Menu
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

.logo {
    width: 11em;
    position: absolute;
    top: 4.8em;
    transform: translate(-50%, -50%);
}
</style>
