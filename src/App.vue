<template>
  <div id="app">
    <mall-header></mall-header>
    <router-view></router-view>
    <mall-footer v-show="$route.meta.showFooter"></mall-footer>
  </div>
</template>

<script>
import MallHeader from './components/MallHeader/MallHeader.vue'
import MallFooter from './components/MallFooter/MallFooter.vue'

export default {
  name: 'App',
  components: {
    MallHeader,
    MallFooter
  }
}
</script>

<style>
@import "assets/css/reset.css";
</style>
