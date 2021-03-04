import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
// import createListView from "../views/createListView.js";
import Bus from "../utils/bus.js";
import { store } from "../store/index.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/news" },
    { 
      path: "/news", 
      name: "news",
      component: NewsView,  //HOC사용으로 주석
      // component: createListView("news")
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");
        /*
          1. 인스턴스 내에서만 this.$store의 접근이 가능하므로 현재 이곳에서는 this.$store가 없기때문에 에러가 발생.
          그래서 import 로 불러옴
          2. to.name은 원래 this.$route.name(news, ask, jobs)이지만 to의 속성값으로 대체 가능
        */
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch(error => console.log(error));
      }
    },
    { 
      path: "/ask", 
      name: "ask",
      component: AskView, //HOC사용으로 주석
      // component: createListView("ask")
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch(error => console.log(error));
      }
    },
    { 
      path: "/jobs", 
      name: "jobs", 
      component: JobsView, //HOC사용으로 주석
      // component: createListView("jobs")
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            console.log(error)
          });
      }
    },
    { path: "/item/:uid", component: ItemView },
    { path: "/user/:uid", component: UserView }, //:id로 보내면 UserView에서 param.id로 값을 얻을 수 있음
  ]
});

export default router
