<template>
  <div class="main">
    <index-header class="header"></index-header>
    <div class="scroll">
      <index-swiper></index-swiper>
      <index-icons></index-icons>
      <index-shopping></index-shopping>
    </div>
    <index-footer class="footer"></index-footer>
  </div>
</template>

<script>
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcons from './icons'
import IndexShopping from './shopping'
import IndexFooter from '../../components/footer'

export default {
  name: 'Index',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons,
    IndexShopping,
    IndexFooter
  }
}
</script>

<style lang="stylus" scoped>
  body
    height: 100%
    .main
      display: flex
      flex-direction: column
      width: 100%
      height: 100%
      .header
        width: 100%
        height: 1.72rem
        line-height: 1.72rem
        position: absolute
        z-index: 5
        top: 0
      .scroll
        width: 100%
        overflow: auto
        top: 1.72rem
        position: absolute
        z-index: 10
        bottom: 1rem
      .footer
        height: 1rem
        line-height: 1rem
        width: 100%
        position: absolute
        z-index: 200
        bottom: 0
</style>
