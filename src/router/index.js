import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 封装 push 和 replace 解决重复跳转同一个路由报错的问题
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}

const Login = () => import('@/pages/Login/Login.vue');
const Register = () => import('@/pages/Register/Register.vue');
const Home = () => import('@/pages/Home/Home.vue');
const Search = () => import('@/pages/Search/Search.vue');
const Detail = () => import('@/pages/Detail/Detail.vue');
const AddCartSuccess = () => import('@/pages/AddCartSuccess/AddCartSuccess.vue');
const ShopCart = () => import('@/pages/ShopCart/ShopCart.vue');

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login,
    meta: { showFooter: false }
  },
  {
    path: '/register',
    component: Register,
    meta: { showFooter: false }
  },
  {
    path: '/home',
    component: Home,
    meta: { showFooter: true }
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: Search,
    meta: { showFooter: true }
  },
  {
    name: 'detail',
    path: '/detail/:skuId?',
    component: Detail,
    meta: { showFooter: true }
  },
  {
    name: 'addCartSuccess',
    path: '/addCartSuccess/:skuNum?',
    component: AddCartSuccess,
    meta: { showFooter: true }
  },
  {
    name: 'shopCart',
    path: '/shopCart',
    component: ShopCart,
    meta: { showFooter: true }
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { y: 0 };
  }
})
