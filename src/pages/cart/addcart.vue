<template>
  <div class="addcart">
    <div  v-for="item in goods" class="box">
      <input type="checkbox" checked="checked" class="addcart-left">
      <div class="addcart-right">
        <div class="top">
          <a href="">
            <img :src="item.photo">
            <div class="font">
              <h1>{{item.subject}}</h1>
              <img src="http://static.epetbar.com/www/cart/noCargo.png" alt="">
              <p class="price">￥{{item.sale_price}}</p>
            </div>
          </a>
        </div>
        <div class="cunt">
          <span>-</span>
          <input type="text" value="1">
          <span>+</span>
        </div>
      </div>
    </div>
    <div class="Buy">
      <div class="zonge">总额 :</div>
      <div class="jies"><button @click="buybuy()">去结算({{$store.state.cart.length}})</button></div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'addcart',
  data () {
    return {
      goods: []
    }
  },
  mounted: function () {
    // console.log(this.$store.state.cart)
    // <p>{{$store.state.cart.length}}</p>
    this.goods = this.goods.concat(this.$store.state.cart)
    console.log(this.goods)
  },
  methods: {
    buybuy: function () { alert('您好请先去登录 ') }
  }
}
</script>

<style lang="stylus" scoped>
  .addcart
    width: 100%;
    position: relative;
    padding-left: 1em;
    margin-bottom: 1.8rem
    margin-top: 1rem
    box-sizing: border-box
    .box
      clear:both
    .addcart-left
      width: .4rem
      height: .4rem
      margin-top: 40px;
      position: relative;
      display: inline-block;
      width: 20px;
      height: 20px;
      background: #fff;
      border: 1px solid #26c269;
      border-radius: 50%;
      outline: 0!important;
      float: left;
    .addcart-right
      border-bottom: 0;
      margin-left: 2.5em;
      padding-top: 1em;
      padding-bottom: 1em;
    .top
      position: relative;
    .top a
      display: block
    .top a img
      width: 100px;
      height: 100px;
      border: 1px solid #d7d7d7;
    .top a .font
      position: absolute;
      top: 0;
      left: 110px;
      height: 100px
      padding-right: 1em;
    .top a .font h1
      padding-top: .5em
      font-size: 13px
      color: #444
    .top a .font img
      margin-top: 1em;
      width: 1.2rem
      height: 0.3rem
    .top a .font .price
      color: #f03e3e
      font-weight: bold
      margin-top: 0.8em
      position: absolute
      bottom: 0
    .cunt
      background: #fff;
      border-top: 1px solid #d7d7d7;
      display: inline-block;
      border-radius: 0px;
      border-bottom: 1px solid #d7d7d7;
      width: 100px;
      float: left;
      margin-top: 0.6em;
    .cunt span
      display: inline-block;
      height: 25px;
      line-height: 25px;
      width: 30px;
      text-align: center;
      cursor: pointer;
      outline: none;
      border-left: 1px solid #d7d7d7;
      float: left;
      font-size: 2em;
      border-right: 1px solid #d7d7d7;
    .cunt input
      padding: 0;
      margin: 0;
      border: 0;
      border-right: 1px solid #d7d7d7;
      border-left: 1px solid #d7d7d7;
      width: 34px;
      border-radius: 0;
      height: 25px;
      line-height: 25px;
      float: left
      text-align:center
    .Buy
      position: fixed;
      bottom: 0;
      left: 0;
      height: 1.2rem;
      width: 100%;
      border-top: 1px solid #d7d7d7;
      z-index:1000
      background: #fff
      display: flex
    .Buy .zonge
      float: left;
      color: #666;
      line-height: 1.2rem
      flex: 1
      text-indent:1.6em
    .Buy .jies
      float: left
      flex: 1
      line-height: 1.2rem
      text-align: right
    .Buy .jies button
      background: #f03e3e
      border: none
      border-radius: 5px
      width: 80px;
      height: 35px;
      line-height: 35px;
      margin-right: 1.4em
</style>
