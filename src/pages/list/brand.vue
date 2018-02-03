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
          <div class="addcart">
            <img src="../../assets/img/addcart.png" class="addcart-img">
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'brand',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.get('/v3/goods/list/main.html?version=355&brandid=0&page=1&orderby=def_desc&cateid=413&pet_type=dog&extend_pam=&real_wid=&region=&system=wap&isWeb=1&_=1517300952132')
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
        // console.log(this.list.comments)
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
</style>
