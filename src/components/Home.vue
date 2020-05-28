<template>
    <div>
        <div class="container"></div>
    </div>
</template>

<script>

export default {
    name: 'Home'
}
</script>

<style scoped>
.container {
    background-image: url('~@/assets/images/home.jpg');
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 15em;
    height: 58em;
}

@media only screen and (max-width: 600px) {
    .container {
       margin-top: 10em;
    }
}
</style>