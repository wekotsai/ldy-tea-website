<template>
  <div>
    <Slide>
        <a id="home" href="#">
            <span >Home</span>
        </a>
        <a id="Shop" href="#">
            <span >Shop</span>
        </a>
        <a id="tea" href="#">
            <span>Our Tea</span>
        </a>
        <a id="about" href="#">
            <span>About Us</span>
        </a>
        <a id="contact" href="#">
            <span>Contact Us</span>
        </a>
    </Slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';

export default {
  name: 'Menu',
    components: {
    Slide
  },
    data () {
       return {
      page: 'menu'
    }
  },
   methods: {
    homeClick() {
      this.page = 'home'
    }
  }
}
</script>

<style>
.bm-burger-bars {
  background-color: #373a47;
  border-radius: 3px;
}

.bm-burger-button {
  left: 28px;
  width: 25px;
}

.bm-menu {
  background-color:rgb(58, 58, 58, 0.85);
}

.bm-item-list a:hover {
  color: #ffffff;
}

.line-style {
  height: 8%;
}
</style>