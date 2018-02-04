<template>
  <div>
    <ul class="brand">
      <li class="brand-list" v-for="item in list" :key="item.gid">
          <div class="brand-left">
            <img :src="item.photo" class="left-img">
          </div>
          <div class="brand-con">
            <h2 class="item-subject">{{item.subject}}</h2>
            <img src="../../assets/img/cu.png" class="cu-img">
            <span class="item-market_price">&yen; {{item.market_price}}</span>
            <span class="details">
              <i class="item-comments">{{item.comments}}</i>
              <i class="item-sold">{{item.sold}}</i>
            </span>
          </div>
          <div class="addcart" @click="addToCart(item)">
            <img src="../../assets/img/addcart.png" class="addcart-img">
          </div>
      </li>
    </ul>
    <div class="addbuy" v-if='seen'>
      <div class="hd"></div>
      <div class="bd">成功添加到购物车！</div>
      <div class="ft">
        <a href="javascript:;" class="continue" @click='tocontinue()'>继续购物</a>
        <a href="javascript:;" class="bus">去购物车</a>
      </div>
    </div>
    <div class="shade" v-if='seen'></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'brand',
  data () {
    return {
      list: [],
      seen: false
    }
  },
  methods: {
    addToCart: function (item) {
      this.seen = true
      // 启动actions 组件通过dispatch方法
      this.$store.dispatch('addToCartA', item)
      // console.log(item)
    },
    tocontinue: function () {
      this.seen = false
    }
  },
  mounted () {
    // 获取从type传过来的参数
    var id = this.$route.query.fid
    // console.log(id)
    var ids = id.slice(7, 100)
    // 获取id
    // console.log(ids)
    axios.get(`/v3/goods/list/main.html?version=355&brandid=0&page=1&orderby=def_desc&cateid=${ids}&pet_type=dog&extend_pam=&real_wid=&region=&system=wap&isWeb=1&_=1517300952132`)
      .then((res) => {
        var arr = []
        // console.log(res.data.list[0].comments)
        // eslint-disable-next-line
        for (let i in res.data.list) {
          // console.log(res.data.list[i])
          arr = res.data.list
          // console.log(arr.comments)
          this.list = arr
          // console.log(this.list[i])
        }
      })
  }
}
</script>

<style lang="stylus" scoped>
  .brand
    margin-bottom: 1rem
    .brand-list
      position: relative
      display: flex
      height: 2.06rem
      padding: .2rem
      border-bottom: .01rem solid #ddd
      .brand-left
        width: 2.06rem
        height: 2.06rem
        .left-img
          width: 100%
      .brand-con
        display: flex
        flex-direction: column
        height: 2.06rem
        width: 4.84rem
        margin-left: .2rem
        .item-subject
          height: .64rem
          line-height: .32rem
          font-size: .14rem
          overflow: hidden
          text-align: left
          text-overflow: ellipsis
          display:-webkit-box
          -webkit-box-orient:vertical
          -webkit-line-clamp: 2
        .cu-img
           margin-top: .2rem
           width: .4rem
        .item-market_price
          height: .5rem
          line-height: .5rem
          overflow: hidden
          text-align: left
          text-overflow: ellipsis
          display:-webkit-box
          -webkit-box-orient:vertical
          -webkit-line-clamp: 1
          color: red
        .details
          height: .41rem
          line-height: .41rem
          font-size: .14rem
          color: #999
          .item-comments
            padding-right: .25rem
      .addcart
        position: absolute
        right: 0
        bottom: 0
        padding: 0 .2rem .2rem 0
        width: .6rem
        height: .6rem
        .addcart-img
          width: 100%
  .addbuy
    margin: 0
    top: 45%
    z-index: 2000
    position: fixed
    width: 80%
    max-width: 300px
    background-color: #fff
    text-align: center
    border-radius: 3px
    overflow: hidden
    left: 10%
  .addbuy .hd
    padding: 1.3em 1.6em .5em
  .addbuy .bd
    padding: 0 1.6em .8em;
    min-height: 40px;
    font-size: 15px;
    line-height: 1.3;
    word-wrap: break-word;
    word-break: break-all;
    color: #999;
  .addbuy .ft
    position: relative;
    line-height: 48px;
    font-size: 18px;
    display: flex
  .addbuy .ft:after
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d5d5d6;
    color: #d5d5d6;
  .ft a
    font-size: 18px
    color: #5f646e;
    display: block;
    flex: 1;
    line-height: 48px;
    font-size: 18px;
    text-align: center;
  .ft a:after
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    color: #d5d5d6;
  .ft .bus
    color: #3cc51f;
    border-left: 1px solid #D5D5D6;
  .shade
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);
</style>
