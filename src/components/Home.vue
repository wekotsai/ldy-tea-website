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
    background-image: url('~@/assets/images/teaset.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 15em;
    height: 50em;
}

@media only screen and (max-width: 600px) {
    .container {
       margin-top: 10em;
    }
}
</style>