<template>
  <div class="cart">
    <div class="header">
      <router-link to="/type"><div class="cart-left iconfont">&#xe6a5;</div></router-link>
      <div class="cart-con">
        <span class="shopping">购物车</span>
        <span class="write">完成</span>
      </div>
      <div class="cart-right iconfont">&#xe62b;</div>
    </div>
    <div class="empty">
      <div class="empty-img">
      </div>
      <div class="empty-word">购物车是空的</div>
      <div class="other">
        <router-link to="/"><div class="stroll">去逛逛</div></router-link>
        <div class="collect">收藏</div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'index-header'
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles.styl'
  .cart
    width: 100%
    .header
      display: flex
      height: 1rem
      border-bottom: .01rem solid #ddd
      line-height: 1rem
      .cart-left
        font-weight: 700
        padding-left: .15rem
        text-align: center
        color: $cartColor
      .cart-con
        flex: 1
        .shopping
          font-size: .35rem
          padding: 0 .5rem 0 2.8rem
        .write
          font-size: .32rem
          padding-left: 1.1rem
      .cart-right
        width: .44rem
        padding-right: .2rem
        text-align: center
        color: $cartColor
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
