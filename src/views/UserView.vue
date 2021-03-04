<template>
  <div>
    <user-profile :propsdata="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">Joined {{ userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue"

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
  components: {
    UserProfile
  }
}
</script>

<style>

</style>
