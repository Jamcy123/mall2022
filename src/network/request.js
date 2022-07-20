import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

const request = axios.create({
  baseURL: '/api',
  timeout: '5000'
});

// 请求拦截器
request.interceptors.request.use(config => {
  // config 配置对象 重要属性 header
  nProgress.start();
  return config;
}, err => {
  return err;
});

// 响应拦截器
request.interceptors.response.use(res => {
  nProgress.done();
  return res.data;
}, err => {
  return err;
});

export default request;
