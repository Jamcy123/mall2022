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
