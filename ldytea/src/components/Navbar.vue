<template>
    <div class="container">
        <img class="logo" src="@/assets/logo.png" />
        <div v-bind:key="navbar.id" v-for="navbar in navbar">
            <NavbarItem v-bind:navbar="navbar" />
        </div>
    </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue';

export default {
    name: "Navbar",
    components: {
        NavbarItem
    },
    props: ["navbar"]
}
</script>

<style scoped>
    .menu {
        float: left;  
        display: inline-flex; 
    }
    .container {
        background-image: url('~@/assets/banner.jpg');
        background-repeat: no-repeat;
        background-position: center;
        margin-top: 10em;
        height: 58em;
    }
    .logo {
        width: 12em;
        position: absolute;
        transform: translate(-50%, -50%);
        margin-top: -4.8em;
    }
</style>

