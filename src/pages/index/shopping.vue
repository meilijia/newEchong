<template>
  <div class="shopping" >
    <div class="shopping-new">
      <img src="../../assets/img/new.gif" class="shopping-img">
    </div>
    <div class="shopping-day">
      <img src="../../assets/img/day.png" class="img-day">
      <div class="shopping-time">
        <p class="start">下一场开始</p>
        <span>22</span>
        <span>:</span>
        <span>00</span>
        <img src="../../assets/img/more.jpg" class="img-more">
      </div>
    </div>
    <ul class="goods">
      <li class="goods-list"  v-for="item in goods" :key="item.gid">
        <div class="good-img-list">
          <img :src="item.image.image" class="goods-img">
        </div>
        <p class="price">&yen;{{item.sale_price}}</p>
        <p class="save">{{item.little_price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index-shopping',
  data () {
    return {
      goods: []
    }
  },
  mounted () {
    axios.get('/v3/index/main.html?do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1517386543406')
      .then((res) => {
        // console.log(res.data.data[3].goods)
        this.goods = res.data.data[3].goods
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles.styl'
  .shopping
    border-bottom: .2rem solid $borderColor
    .shopping-new
      width: 100%
      height: 2.4rem
      .shopping-img
        width: 100%
    .shopping-day
      display: flex
      justify-content: space-between
      margin: 0 0 .25rem .25rem
      height: 1rem
      line-height: 1rem
      .img-day
        margin: auto 0
        width: 1.32rem
        height: .32rem
      .shopping-time
        display: flex
        .start
          padding: 0 .15rem
        .img-more
          width: 1.2rem
    .goods
      display: flex
      overflow-x: auto
      height: 2.9rem
      padding: .1rem 0
      .goods-list
        display: flex
        flex-direction: column
        width: 2rem
        height: 2.9rem
        margin: 0 .15rem
        .good-img-list
          width: 1.7rem
          height: 1.7rem
          .goods-img
            width: 100%
        .price
          width: 100%
          height: .44rem
          line-height: .44rem
          margin: .15rem 0
          text-align: center
          font-size: .16rem
          color: red
        .save
          width: 100%
          height: .44rem
          line-height: .44rem
          text-align: center
          font-size: .16rem
          color: #999
</style>
