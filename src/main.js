import Vue from 'vue';
import App from './App.vue';
import TypeNav from './components/TypeNav/TypeNav.vue';
import Carousel from './components/Carousel/Carousel.vue';
import router from '@/router';
import store from '@/store';

import '@/mock/mockServe';
import 'swiper/css/swiper.css';

Vue.config.productionTip = false;

// 注册全局组件
Vue.component('TypeNav', TypeNav);
Vue.component('Carousel', Carousel);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
