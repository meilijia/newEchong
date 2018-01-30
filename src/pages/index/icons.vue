<template>
  <div class="icons">
    <ul class="icons-con">
      <li class="icons-small" v-for="item in icons" :key="item.name">
        <img :src="item.image" class="icons-img">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index-icons',
  data () {
    return {
      icons: []
    }
  },
  mounted () {
    axios.get('/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1517232488654')
      .then((res) => {
        // console.log(res)
        this.icons = res.data.datas[2].menus
        // console.log(this.icons)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles.styl'
  .icons
    overflow: hidden
    border-bottom: .2rem solid $borderColor
    height: 3.8rem
    .icons-con
      display: flex
      flex-direction: row
      flex-wrap: wrap
      height: 3.8rem
      .icons-small
        flex: 20%
        .icons-img
          width: 100%
</style>
