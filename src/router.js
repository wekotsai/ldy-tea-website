import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Tea from './components/Tea.vue';
import Shop from './components/Shop.vue';
import About from './components/About.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
          path: '/home',
          name: 'Home', 
          component: Home,
        },
        { 
            path: '/contact',
            name: 'Contact', 
            component: Contact,
        },
        { 
            path: '/tea',
            name: 'Tea',
            component: Tea,
        },  
        { 
            path: '/about',
            name: 'about',
            component: About,
        }, 
        { 
            path: '/shop',
            name: 'shop',
            component: Shop,
        }, 
      ],
});

router.replace({ path: '/home', redirect: '/index.html ' })
export default router;