<template>
  <div class="sale">
    <div class="sale-top">
      <img class="sale-img" src="../../assets/img/sale.jpg" >
      <img src="../../assets/img/more.jpg" class="img-more">
    </div>
    <div class="blank"></div>
    <div>
      <div class="food" v-for="photo in imgs" :key="photo.advid">
        <img class="food-img" :src="photo.image">
        <div class="blank"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index-brandsale',
  data () {
    return {
      food: [],
      imgs: []
    }
  },
  mounted () {
    axios.get('/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1517386543113')
      .then((res) => {
        // console.log(res.data.datas.slice(15, 36)[2].content_images[0][0].image)
        var arr = []
        arr = res.data.datas.slice(15, 36)
        // console.log(arr)
        this.food = arr
        var img = []
        for (var i in arr) {
          // eslint-disable-next-line
          if (!(i % 2) && i != 0) {
            // console.log(i)
            // console.log(arr[i].content_images[0][0].image)
            img.push(arr[i].content_images[0][0])
            // console.log(img)
          }
          this.imgs = img
          // console.log(this.imgs)
        }
        // console.log(this.food)
        // console.log(this.icons)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style lang="stylus" scoped>
  .sale
    height: 2rem
    .sale-top
      display: flex
      width: 100%
      height: 1.45rem
      padding: 0.06rem 0
      .sale-img
        height: 1.45rem
        padding-left: 1.9rem
      .img-more
        height: 1rem
        width: 1.2rem
        margin-left: .6rem
    .blank
      width: 100%
      height: .44rem
    .food
      width: 100%
      height: 3.64rem
      background: #f5f5f5
      .food-img
        width: 100%
</style>
