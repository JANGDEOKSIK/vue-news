<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :propsdata="fetchedItem">
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ "Posted, " + fetchedItem.time_ago }}</template>
        <div slot="karma">{{ this.$store.state.user.karma }}</div>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
        {{ fetchedItem.content }}
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue"
export default {
  computed: {
    // item() {
    //   return this.$store.state.item;
    // }
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemInfo = this.$route.params.uid;
    this.$store.dispatch("FETCH_ITEM", itemInfo);
  },
  components: {
    UserProfile
  }
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
