<template>
  <div class="list">
    <div class="header">
      <router-link to="/type"><div class="list-left iconfont">&#xe6a5;</div></router-link>
      <div class="list-con">
        <span class="goodslist">购物车</span>
      </div>
      <div class="list-right iconfont">&#xe62b;</div>
    </div>
    <div class="search">
      <div class="search-con">
        <i class="iconfont fangdajing">&#xe69d;</i>
        <input type="text" class="txt" placeholder="点击搜素商品">
      </div>
    </div>
    <ul class="nav">
      <li @click="showMenu()">默认</li>
      <li>销量</li>
      <li>价格</li>
      <li>筛选</li>
    </ul>
    <div class="menuone" v-show="show">
      <li>默认排序</li>
      <li>按人气</li>
      <li>最新上架</li>
      <li>按评论</li>
    </div>
    <div class="menutwo">
      <li @click="showBrand()">品牌</li>
      <li>年龄</li>
      <li>体型</li>
      <li>颗粒大小</li>
    </div>
    <div class="brand"  v-show="showbrand">
      <li v-for="item in brand" :key="item.id">{{item.name}}</li>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
      show: false,
      brand: [],
      showbrand: false
    }
  },
  methods: {
    showMenu () {
      this.show = !this.show
    },
    showBrand () {
      this.showbrand = !this.showbrand
    }
  },
  mounted () {
    axios.get('/v3/goods/list/main.html?version=355&brandid=0&page=1&orderby=def_desc&cateid=413&pet_type=dog&extend_pam=&real_wid=&region=&system=wap&isWeb=1&_=1517300952132')
      .then((res) => {
        // console.log(res.data.filterBoxData[0].hot_rows)
        this.brand = res.data.filterBoxData[0].hot_rows
      })
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .header
      display: flex
      height: 1rem
      border-bottom: .01rem solid #ddd
      line-height: 1rem
      .list-left
        font-weight: 700
        padding-left: .15rem
        text-align: center
        color: $cartColor
      .list-con
        flex: 1
        .goodslist
          font-size: .35rem
          padding: 0 .5rem 0 2.8rem
      .list-right
        width: .44rem
        padding-right: .2rem
        text-align: center
        color: $cartColor
  .search
    height: 1rem
    width: 100%
    border-bottom: .01rem solid #ddd
    .search-con
      display: flex
      margin: .2rem
      height: .8rem
      line-height: .8rem
      background: #f6f6f6
      border-radius: .1rem
      .txt
        flex: 1
        border: 0
        background: #f6f6f6
        line-height: .4rem
        text-indent: .02rem
        padding: 0 .3rem
        border-radius: .1rem
      .fangdajing
        font-weight: 700
        padding-left: .25rem
  .nav
    position: relative
    display: flex
    height: .8rem
    border-bottom: .01rem solid #ddd
  .nav li
    flex: 1
    text-align: center
    line-height: .8rem
  .menuone
    position: absolute
    z-index: 20
    height: 3.36rem
    background: #f5f5f5
    width: 100%
  .menuone li
    height: .44rem
    padding: .2rem
    line-height: .44rem
  .menutwo
    display: flex
    height: .6rem
    border-bottom: .01rem solid #ddd
  .menutwo li
    flex: 1
    position: relative
    margin: .1rem
    background: #f1f5f6
    line-height: .4rem
    text-align: center
    font-size: .12rem
  .brand
    display: flex
    flex-wrap: wrap
    position: absolute
    overflow-y: auto
    z-index: 19
    height: 4.2rem
    width: 100%
    background: #fff
  .brand li
    flex: 30%
    text-align: center
    height: .4rem
    line-height: .4rem
    margin: .1rem
    font-size: .12rem
</style>
