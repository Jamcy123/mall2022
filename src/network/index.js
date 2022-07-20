import request from "./request";

// 三级联动接口
// /api/product/getBaseCategoryList
export const reqCategoryList = () => request({
  url: '/product/getBaseCategoryList',
  method: 'get'
});
