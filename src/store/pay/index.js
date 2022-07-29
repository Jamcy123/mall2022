// pay Store
const state = {
  code: 0
};
const getters = {};
const mutations = {
  CHANGECODE(state, code) {
    state.code = code;
  }
};
const actions = {
  changeCode({commit}, code) {
    commit('CHANGECODE', code);
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
