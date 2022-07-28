import { reqAddressInfo, reqOrderInfo } from '@/network'

// trade Store
const state = {
  addressInfo: [],
  orderInfo: []
};
const getters = {};
const mutations = {
  GETADDRESSINFO(state, value) {
    state.addressInfo = value;
  },
  GETORDERINFO(state, value) {
    state.orderInfo = value;
  }
};
const actions = {
  async getAddressInfo({ commit }) {
    return await reqAddressInfo()
      .then(res => {
        if (res.code === 200) {
          commit('GETADDRESSINFO', res.data);
          return Promise.resolve('请求成功');
        }
        throw new Error('请求失败');
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },
  async getOrderInfo({ commit }) {
    return await reqOrderInfo()
      .then(res => {
        if (res.code === 200) {
          commit('GETORDERINFO', res.data);
          return Promise.resolve('请求成功');
        }
        throw new Error('请求失败');
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
