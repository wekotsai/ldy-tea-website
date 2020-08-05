<template>
  <div id="app">
    <img class="logo" src="@/assets/images/logoWhite.png" />
    <Menu />
    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top>
    <Footer />
  </div>
</template>

<script>
import Menu from './components/Menu';
import Footer from './components/Footer';
import BackToTop from 'vue-backtotop';

export default {
  name: 'app',
  components: {
    Menu,
    Footer,
    BackToTop
  }
}
</script>

<style>
</style>
