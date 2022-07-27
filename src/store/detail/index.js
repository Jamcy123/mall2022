import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/network";
import { getUUID } from '@/utils/uuid_token'


// detail Store
const state = {
  goodsInfo: {},
  shopCart: [],
  uuid_token: getUUID()
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
    console.log('_: ', _);

    return await reqAddOrUpdateShopCart(skuId, skuNum)
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
