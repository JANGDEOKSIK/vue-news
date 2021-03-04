import Bus from "../utils/bus.js"
export default {
  //재사용할 컴포넌트 옵션 & 로직
  created() {
    // Bus.$emit("start:spinner");

    // // response 가 리턴되기 때문에 axios를 체이닝 할 수 있다.
    // // console.log("routeName: ", this.$route.name);
    // this.$store.dispatch("FETCH_LIST", this.$route.name)
    //   .then(() => {
    //     console.log("22222");
    //     Bus.$emit("end:spinner");
    //   })
    //   .catch(error => console.log(error));
  }
}
