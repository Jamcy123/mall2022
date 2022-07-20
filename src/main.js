import Vue from 'vue'
import App from './App.vue'
import TypeNav from './components/TypeNav/TypeNav.vue'

import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('TypeNav', TypeNav);

import {reqCategoryList} from '@/network'
reqCategoryList();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
