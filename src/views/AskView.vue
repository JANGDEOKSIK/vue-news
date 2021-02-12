<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>

        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class="link-text">{{ item.time_ago }} by {{ item.user }}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    // #4
    // ...mapGetters({
    //   askItems: "fetchedAsk",
    // })

    // #3
    ...mapGetters([
      "fetchedAsk"
    ])

    // #2
    // ...mapState({
    //   ask: state => state.ask
    // })

    // #1
    // ask() {
    //   return this.$store.state;
    // }
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
    console.log(this.$store.state.ask);
    // fetchAskList()
    //   .then(res => this.ask = res.data)
    //   .catch(err => console.log(err))
  }
}
</script>

<style>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #424242;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
