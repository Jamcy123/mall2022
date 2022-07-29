import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '../utils/token.js';
import store from '../store'

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
const Trade = () => import('@/pages/Trade/Trade.vue');
const Pay = () => import('@/pages/Pay/Pay.vue');
const PaySuccess = () => import('@/pages/PaySuccess/PaySuccess.vue');
const Center = () => import('@/pages/Center/Center.vue');
const MyOrder = () => import('@/pages/Center/MyOrder/MyOrder.vue');
const GroupOrder = () => import('@/pages/Center/GroupOrder/GroupOrder.vue');

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
  {
    name: 'trade',
    path: '/trade',
    component: Trade,
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path === '/shopCart') {
        next();
      } else {
        next('/shopCart');
      }
    }
  },
  {
    name: 'pay',
    path: '/pay',
    component: Pay,
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path === '/trade') {
        next();
      } else {
        next('/trade');
      }
    }
  },
  {
    name: 'paySuccess',
    path: '/paySuccess',
    component: PaySuccess,
    meta: { showFooter: true }
  },
  {
    name: 'center',
    path: '/center',
    component: Center,
    meta: { showFooter: true },
    children: [
      {
        path: '/center',
        redirect: '/center/myOrder'
      },
      {
        path: 'myOrder',
        component: MyOrder
      },
      {
        path: 'groupOrder',
        component: GroupOrder
      }
    ]
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior() {
    return { y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  const token = getToken();
  const name = store.state.user.userInfo.name;

  if (token) {
    // 登录之后 无法去login和register
    if (to.path === '/login' || to.path === '/register') {
      next('/home');
    } else {
      // 登录了但未获取用户信息，则发送获取
      if (!name) {
        store.dispatch('getUserInfo')
          .then(() => {
            next();
          })
          .catch(() => {
            store.dispatch('userLogout');
            next('/login');
          });
      } else {
        next();
      }
    }
  } else {
    // 未登录不可去部分页面
    const blacklist = ['/trade', '/pay', '/paysuccess', '/center', '/center/myOrder', '/center/groupOrder'];
    if (blacklist.includes(to.path)) {
      next('/login?toPath=' + to.path);
    } else {
      next();
    }
  }
});

export default router;
