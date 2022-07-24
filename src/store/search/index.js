import { reqSearchInfo } from '@/network'
// search Store
const state = {
  searchList: {}
};
const getters = {
  total(state) {
    return state.searchList.total || 0;
  },
  goodsList(state) {
    return state.searchList.goodsList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
};
const mutations = {
  GETSEARCHLIST(state, value) {
    state.searchList = value;
  }
};
const actions = {
  async getSearchList({ commit }, payload) {
    const result = await reqSearchInfo(payload);
    if (result.code === 200) {
      commit('GETSEARCHLIST', result.data);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
