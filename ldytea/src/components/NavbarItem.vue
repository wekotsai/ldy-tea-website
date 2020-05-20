<template>
    <div>
        <ul class="menu">
            <!-- <li>{{navbar.title}}</li> -->
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavbarItem",
    props: ["navbar"]
}
</script>

<style scoped>
    ul.menu {
        text-align: left;
        list-style-type: none;
    }
</style>
