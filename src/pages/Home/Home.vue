<template>
  <div>
    <type-nav/>
    <list-container/>
    <recommend/>
    <rank/>
    <like/>
    <brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer.vue'
import Recommend from './Recommend/Recommend.vue'
import Brand from './Brand/Brand.vue'
import Rank from './Rank/Rank.vue'
import Like from './Like/Like.vue'
export default {
  name: 'Home',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Brand
  }
}
</script>

<style scoped>

</style>
