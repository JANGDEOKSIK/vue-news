<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedNews" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>

        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            by
            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    // # mapGetters로 하는 방법 중 getters의 이름을 변경 안하고 바로 배열로 적용 하는 법
    ...mapGetters([
      "fetchedNews"
    ])

    // # mapGetters로 하는 방법 중 이름이 각각 다르게 적용할 때 객체로 하는 법
    // ...mapGetters({
    //   newsItem: "fetchedNews"
    // })

    // # mapState로 하는 방법
    // ...mapState({
    //   news(state) {
    //     return state.news
    //   }
    // })
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
    // fetchNewsList()
    //   .then(res => this.users = res.data)
    //   .catch(err => console.log(err));
  }
}
</script>

<style scoped>
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
