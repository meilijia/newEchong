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
    position: fixed
    top: 0
    background: #fff
    z-index:2100
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
        display: flex
        .shopping
          text-align:center
          font-size: .35rem
          flex: 1
        .write
          text-align: center
          font-size: .32rem
          flex: 1
      .cart-right
        width: .44rem
        padding-right: .2rem
        text-align: center
        color: $cartColor
</style>
