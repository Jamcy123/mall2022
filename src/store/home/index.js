import { reqCategoryList, reqBannerList, reqFloorList } from "@/network";


// home Store
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
};
const getters = {};
const mutations = {
  CATEGORYLIST(state, value) {
    state.categoryList = value;
  },
  GETBANNETLIST(state, value) {
    state.bannerList = value;
  },
  GETFLOORIST(state, value) {
    state.floorList = value;
  }
};
const actions = {
  async getCategoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data);
    }
  },
  async getBannerList({ commit }) {
    const result = await reqBannerList();
    if (result.code === 200) {
      commit('GETBANNETLIST', result.data);
    }
  },
  async getFloorList({ commit }) {
    const result = await reqFloorList();
    if (result.code === 200) {
      commit('GETFLOORIST', result.data);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
