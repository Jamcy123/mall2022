<template>
  <div>
    <type-nav />
    <list-container />
    <recommend />
    <rank />
    <like />
    <floor v-for="e in floorList" :key="e.id" :list="e"/>
    <brand />
  </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer.vue'
import Rank from './Rank/Rank.vue'
import Recommend from './Recommend/Recommend.vue'
import Like from './Like/Like.vue'
import Floor from './floor/Floor.vue'
import Brand from './Brand/Brand.vue'
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    ListContainer,
    Rank,
    Recommend,
    Like,
    Floor,
    Brand
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  },
  mounted() {
    console.log('Home.vue-this.$store.pay.code: ', this.$store.state.pay.code);
    this.$store.dispatch('getFloorList');
    this.$store.dispatch('getUserInfo')
    .then(console.log)
    .catch(console.log);
  }
}
</script>

<style scoped>
</style>
