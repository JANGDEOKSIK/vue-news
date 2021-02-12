<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.uid;
    this.$store.dispatch("FETCH_USER", userName); //비동기니까 dispatch
    /*
      userName을 payload로 넘길수있음.
      payload 인자는 한개만 넘길 수 있으므로 객체화 시키던지, destructuring시킴
    */
  },
}
</script>

<style>

</style>
