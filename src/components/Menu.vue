<template>
  <div>
    <Slide>
      <router-link 
        v-for="route in routes" 
        :key="route.path" 
        :to="route.path"
      >
        {{route.name}}
      </router-link> 
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
      page: 'menu',
      routes: [
        {name: 'Home', path: '/home'},
        {name: 'Our Tea', path: '/tea'},
        {name: 'About Us', path: '/about'}
      ]
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
</style>