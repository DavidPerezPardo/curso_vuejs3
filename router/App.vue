<template>
    <h3>Hello, and welcome to Vue Router</h3>

    <router-link to="hello">Hello </router-link>
    <router-link to="posts">Posts </router-link>
    <router-link to="posts/1">Un post </router-link>

    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    a {
        margin-right: 10px;
    }
</style>