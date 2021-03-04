<template>
  <div id="app">
    <axios-test></axios-test>
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import AxiosTest from "./components/AxiosTest.vue";
import Bus from "./utils/bus.js";

export default {
  name: "News",
  components: {
    ToolBar,
    Spinner,
    AxiosTest,
  },
  data() {
    return {  
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    Bus.$on("start:spinner", this.startSpinner);
    Bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    Bus.$off("start:spinner", this.startSpinner);
    Bus.$off("end:spinner", this.endSpinner);
  }
}
</script>

<style>
body {padding: 0; margin: 0;}

/* router-transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
a {
  color: #34495b;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
