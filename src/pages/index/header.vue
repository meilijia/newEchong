<template>
  <div class="header">
    <div class="search">
      <div class="header-left">
        <span class="animal">猫咪</span>
        <span class="place">重庆</span>
      </div>
      <input type="text" class="txt" placeholder="搜索商品和品牌">
      <i class="iconfont message">&#xe635;</i>
    </div>
    <div class="scrollbar">
      <ul class="nav">
        <li><a href="#" class="first">首页</a></li>
        <li><a href="#">狗狗主粮</a></li>
        <li><a href="#">服饰城</a></li>
        <li><a href="#">医疗保健</a></li>
        <li><a href="#">零食玩具</a></li>
        <li><a href="#">日用外出</a></li>
        <li><a href="#">美容香波</a></li>
        <li><a href="#">零食玩具</a></li>
        <li><a href="#">日用外出</a></li>
        <li><a href="#">美容香波</a></li>
      </ul>
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
  .header
    width: 100%
    .search
      box-sizing: border-box
      display: flex
      height: 1rem
      line-height: .8rem
      width: 100%
      padding: .1rem .2rem
      .header-left
        width: 2.1rem
        .animal
          padding: 0 .1rem
          border-right: .01rem solid $fontColor
          color: $fontColor
        .place
          padding-left: .05rem
          color: $fontColor
          &::before
            position: absolute
            left: 1.8rem
            top: .43rem
            content: '\0020'
            width: 0
            height: 0
            border-left: .12rem solid transparent
            border-right: .12rem solid transparent
            border-top: .12rem solid $fontColor
      .txt
        flex: 1
        height: .5rem
        line-height: .5rem
        margin: .15rem .25rem 0 0
        border: 0
        background: #e9e9e9
        text-indent: .2rem
        border-radius: .11rem
        font-size: .25rem
      .message
        font-size: .4rem
    .scrollbar
      overflow-x: hidden
      width: 100%
      .nav
        display: flex
        flex-direction: row
        overflow-x: auto
        white-space: nowrap
        height: .72rem
        line-height: .72rem
      .nav li
        flex: 1
        font-size: .3rem
        padding: 0 .25rem
      li a
        color: $fontColor
      .first
        padding-bottom: .15rem
        border-bottom: 2px solid green
        color: green
</style>
