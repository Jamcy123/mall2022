import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/network";


// detail Store
const state = {
  goodsInfo: {},
  shopCart: []
};
const getters = {
  // 路径导航数据
  categoryView(state) {
    return state.goodsInfo.categoryView || {};
  },
  // 价格
  price(state) {
    return state.goodsInfo.price || 0;
  },
  // 产品信息
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {};
  },
  // 产品售卖属性
  spuSaleAttrList(state) {
    return state.goodsInfo.spuSaleAttrList || [];
  }
};
const mutations = {
  GETGOODSINFO(state, value) {
    state.goodsInfo = value;
  }
};
const actions = {
  async getGoodsInfo({ commit }, skuId) {
    const result = await reqGoodsInfo(skuId);
    if (result.code === 200) {
      commit('GETGOODSINFO', result.data);
    }
  },
  async addOrUpdateShopCart(_, { skuId, skuNum }) {
    const result = await reqAddOrUpdateShopCart(skuId, skuNum);
  },

};

export default {
  state,
  getters,
  mutations,
  actions,
};
