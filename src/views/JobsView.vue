<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/Listitem";
import Bus from "../utils/bus.js"; // 이벤트버스는 보통 라이프사이클 훅안에서 사용
import ListMixin from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem
  },
  // mixins: [
  //   ListMixin
  // ],
  mounted() {
    Bus.$emit("end:spinner");
  }
}
</script>

<style>

</style>
