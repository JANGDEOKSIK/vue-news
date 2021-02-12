import { 
  fetchNewsList, 
  fetchAskList, 
  fetchJobsList, 
  fetchUserInfo,
  fetchItemInfo,
} from "../api"
export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit("SET_NEWS", data);
      })
      .catch(err => {
        console.log(err);
      })
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch(err => {
        console.log(err);
      })
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then((response) => {
        context.commit("SET_JOBS", response.data);
      })
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data)
      })
      .catch(err => {
        console.log(err);
      })
  },
  FETCH_ITEM(context, item) {
    fetchItemInfo(item)
      .then(response => {
        context.commit("SET_ITEM", response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
