<template>
  <div class="lunbo index-banner">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in list" :key="item.advid">
        <img class="banner-img" :src="item.image" />
      </div>
      <div class="swiper-pagination"  slot="pagination"></div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'

export default {
  name: 'index-swiper',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.get('/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1517232488654')
      .then((res) => {
        // console.log(res)
        this.list = res.data.datas[0].value
        // console.log(this.list)
        this.$nextTick(function () {
          this.sp = new Swiper('.swiper-container', {
            loop: true,
            autoplay: 2000
          })
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style lang="stylus" scoped>
  .lunbo
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 43%
    .banner-img
      width: 100%
</style>
