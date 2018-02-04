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
<<<<<<< HEAD
  // mounted () {
  //   console.log(this.$route.params.id)
  // }
=======
>>>>>>> 9c994fa0b53d1b23b3a22e18bbda735d8bed5c54
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
