<template>
    <div class="container">
        <img class="logo" src="@/assets/logo.png" />
    </div>
</template>

<script>
export default {
    name: "Banner",
    props: ["navbar"]
}
</script>

<style scoped>
    .container {
        background-image: url('~@/assets/banner.jpg');
        background-repeat: no-repeat;
        background-position: center;
        margin-top: 10em;
        height: 58em;
    }

    .logo {
        width: 11em;
        position: absolute;
        transform: translate(-50%, -50%);
        margin-top: -4.8em;
    }
</style>