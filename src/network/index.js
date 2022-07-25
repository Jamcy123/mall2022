import request from "./request";
import mockRequest from "./mockRequest";

// 三级联动接口
// /api/product/getBaseCategoryList
export const reqCategoryList = () => request({
  url: '/product/getBaseCategoryList',
  method: 'get'
});

// 获取banner 轮播图
// /mock/banner
export const reqBannerList = () => mockRequest({
  url: '/banner',
  method: 'get'
});

// 获取floor 轮播图
// /mock/floor
export const reqFloorList = () => mockRequest({
  url: '/floor',
  method: 'get'
});

// 获取Search 
// /api/list POST 需要带参数
export const reqSearchInfo = (params = {}) => request({
  url: '/list',
  method: 'post',
  data: params
});

// 获取产品详细信息
// /api/item/{ skuId }
export const reqGoodsInfo = skuId => request({
  url: '/item/' + skuId,
  method: 'get',
});

// 添加购物车
// /api/cart/addToCart/{ skuId }/{ skuNum } POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => request({
  url: `/cart/addToCart/${skuId}/${skuNum}`,
  method: 'post',
});
