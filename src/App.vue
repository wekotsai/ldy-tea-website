<template>
  <div id="app">
    <img class="logo" src="@/assets/images/newLogo.png" />
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
</style>
