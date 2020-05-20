<template>
  <div id="app">
    <Home />
    <Menu />
  </div>
</template>

<script>
import Home from './components/Home';
import Menu from './components/Menu';

export default {
  name: 'app',
  components: {
    Home,
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
</style>
