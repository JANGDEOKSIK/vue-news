import { 
  fetchNewsList, 
  fetchAskList, 
  fetchJobsList, 
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index.js"
export default {
  async FETCH_NEWS(context) {
    try {
      const response = await fetchNewsList();
      context.commit("SET_NEWS", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK({ commit }) {
    try {
      const response = await fetchAskList();
      commit("SET_ASK", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_JOBS(context) {
    try {
      const response = await fetchJobsList();
      context.commit("SET_JOBS", response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
  },
  async FETCH_USER(context, name) {
    try {
      const response = await fetchUserInfo(name);
      context.commit("SET_USER", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM(context, item) {
    try {
      const response = await fetchItemInfo(item);
      context.commit("SET_ITEM", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  }
}
