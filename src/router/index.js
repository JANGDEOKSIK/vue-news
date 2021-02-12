import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/news" },
    { path: "/news", component: NewsView },
    { path: "/ask", component: AskView },
    { path: "/jobs", component: JobsView },
    { path: "/item/:uid", component: ItemView },
    { path: "/user/:uid", component: UserView }, //:id로 보내면 UserView에서 param.id로 값을 얻을 수 있음
  ]
});

export default router
