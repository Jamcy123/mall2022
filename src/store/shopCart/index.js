import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/network'

// shopCart Store
const state = {
  cartList: []
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  }
};
const mutations = {
  GETCARTLIST(state, value) {
    state.cartList = value;
  }
};
const actions = {
  async getCartList({ commit }) {
    const result = await reqCartList();
    if (result.code === 200) {
      commit('GETCARTLIST', result.data);
    }
  },
  async deleteCartListBySkuId(_, skuId) {
    return await reqDeleteCartById(skuId)
      .then(res => {
        if (res.code == 200) return Promise.resolve('请求成功');
        throw new Error('请求失败');
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },
  async updateCheckedById(_, { skuId, isChecked }) {
    return await reqUpdateCheckedById(skuId, isChecked)
      .then(res => {
        if (res.code == 200) return Promise.resolve('请求成功');
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
