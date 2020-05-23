<template>
  <div>
    <Slide>
      <router-link to="/home">Home</router-link>
      <router-link to="/tea">Our Tea</router-link>
      <router-link to="/about">About Us</router-link>
      <!-- <router-link to="/contact">Contact</router-link> -->
      <!-- <router-link to="/shop">Shop</router-link> -->
    </Slide>
    <router-view></router-view>
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
  },
    props: ['myProps'],
  created() {
    // eslint-disable-next-line
    console.log(this.myProps);
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
  white-space: nowrap;
  overflow: hidden;
}

.bm-item-list a {
  color: #ffffff;
}

.bm-item-list a:hover {
  color: #ffffff;
}

.line-style {
  height: 8%;
}
</style>