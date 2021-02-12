<template>
  <div>
    <ul class="news-list">
      <li v-for="job in fetchedJobs" :key="job.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ job.points || 0 }}
        </div>

        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by 
            <a :href="job.url">{{ job.domain }}</a>
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
    // ...mapGetters({
    //   jobsItem: "fetchedJobs"
    // })

    ...mapGetters([
      "fetchedJobs"
    ])

    // ...mapState({
    //   jobs: state => state.jobs
    // })
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
    // fetchJobsList()
    //   .then(res => this.jobs = res.data)
    //   .catch(err => console.log(err));
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
