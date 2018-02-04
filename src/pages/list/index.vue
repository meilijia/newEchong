<template>
  <div>
    <list></list>
    <brand></brand>
  </div>
</template>

<script>
import List from './list'
import Brand from './brand'

export default {
  name: 'index',
  components: {
    List,
    Brand
  }
  // mounted () {
  //   console.log(this.$route.params.id)
  // }
}
</script>

<style lang="stylus" scoped>
  .footer
    height: 1rem
    line-height: 1rem
    width: 100%
    position: absolute
    z-index: 200
    bottom: 0
</style>
