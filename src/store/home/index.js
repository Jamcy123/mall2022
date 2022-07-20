import { reqCategoryList } from "@/network";

// home Store
const state = {
  categoryList: []
};
const getters = {};
const mutations = {
  CATEGORYLIST(state, value) {
    state.categoryList = value;
  }
};
const actions = {
  async categoryList({commit}) {
    const result = await reqCategoryList();
    if(result.code === 200) {
      commit('CATEGORYLIST', result.data);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
