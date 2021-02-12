<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/Ask">Ask</router-link> |
    <router-link to="/jobs">jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {display: flex; padding: 8px; color: #fff; background-color: #42b883;}
.header .router-link-exact-active {color: #35495e;}
.header a {color: #fff;}
</style>
