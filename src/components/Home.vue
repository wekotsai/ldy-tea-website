<template>
    <div>
        <div class="banner"></div>
    </div>
</template>

<script>

export default {
    name: 'Home'
}
</script>

<style scoped>
.banner {
    background-image: url('~@/assets/images/teaset.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: -3.8em;
    padding: 0px;
    height: 55em;
}

@media only screen and (max-width: 600px) {
    .banner {
       background-image: url('~@/assets/images/bannerMobile.png');
       height: 35em;
    }
}
</style>