<template>
  <!--banner轮播-->
  <div class="swiper-container" id="mySwiper" ref="swiperRef">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Carousel',
  props: ['list'],
  watch: {
    bannerList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          this.swiperObj = new Swiper(this.$refs.swiperRef, {
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          });
        })
      }
    }
  }
}
</script>

<style>
</style>
