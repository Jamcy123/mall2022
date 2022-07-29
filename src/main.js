import Vue from 'vue';
import App from './App.vue';

import TypeNav from './components/TypeNav/TypeNav.vue';
import Carousel from './components/Carousel/Carousel.vue';
import Pagenation from './components/Pagenation/Pagenation.vue';
import router from '@/router';
import store from '@/store';

import * as API from './network'

import '@/mock/mockServe';
import 'swiper/css/swiper.css';
import { Button, MessageBox } from 'element-ui';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;


import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload)

// or with options
// import loadimage from './assets/-.gif';
import loadimage from './assets/logo.png';
import errorimage from './assets/-.gif';

Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: errorimage,
  loading: loadimage,
  // attempt: 1
})

// 注册全局组件
Vue.component('TypeNav', TypeNav);
Vue.component('Carousel', Carousel);
Vue.component('Pagenation', Pagenation);

import '@/plugins/validate.js'

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  render: h => h(App),
}).$mount('#app');
