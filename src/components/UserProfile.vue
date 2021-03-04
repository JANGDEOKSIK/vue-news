<template>
  <div class="user-container">
    <div><i class="fas fa-user"></i></div>
    <div class="user-desc">
      <slot name="username"></slot>
      
      <div class="time">
      </div>
      <slot name="time"></slot>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propsdata: Object,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
}
</script>

<style scoped>
  .user-container {
    display: flex; 
    align-items: center;
    padding: 10px;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-desc {
    padding-left: 8px;
  }
  .time {
    font-size: 0.7rem;
  }
</style>
