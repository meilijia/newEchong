<template>
  <div>
    <list></list>
    <brand></brand>
    <index-footer class="footer"></index-footer>
  </div>
</template>

<script>
import List from './list'
import Brand from './brand'
import IndexFooter from '../../components/footer'

export default {
  name: 'index',
  components: {
    List,
    Brand,
    IndexFooter
  }
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
