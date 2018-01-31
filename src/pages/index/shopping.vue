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
    <ul class="goods" v-for="item in goods">
      <li></li>
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
    axios.get('/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1517232488654')
      .then((res) => {
        console.log(res)
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
</style>
