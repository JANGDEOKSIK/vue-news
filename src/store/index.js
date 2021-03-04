import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations"
import actions from "./actions"
// import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/"

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
    list: [],
  },
  getters: {
    fetchedNews(state) {
      return state.news;
    },
      
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchedItem(state) {
      return state.item;
    },
    fetchedList(state) {
      return state.list;
    }
  },
  mutations: mutations,
  actions: actions
})
