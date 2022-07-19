<template>
  <div>
    Search组件
    <hr/>
    {{$route.query.message}}
    <hr/>
    {{$route.params.message}}
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>

</style>
