<template>
  <div class="empty">
      <div class="empty-img"></div>
      <div class="empty-word">购物车是空的</div>
      <div class="other">
        <router-link to="/"><div class="stroll">去逛逛</div></router-link>
        <div class="collect">收藏</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'empty'
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles.styl'
  .empty
    height: 6rem
    .empty-img
      height: 3.44rem
      width: 100%
      background: url(../../assets/img/cart.png) no-repeat 120px -170px
    .other
      display: flex
      justify-content: center
      line-height: .8rem
      height: .8rem
      width: 100%
      margin-top: .5rem
      text-align: center
    .other div
      width: 2rem
      height: .8rem
      border: .01rem solid $cartColor
      border-radius: .2rem
      color: $cartColor
    .stroll
      margin-right: .2rem
    .collect
      margin-left: .2rem
    .empty-word
      width: 100%
      height: .4rem
      text-align: center
      line-height: .4rem
      font-size: .36rem
      color: #dbdbdb
</style>
