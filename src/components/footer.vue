<template>
  <ul class="footer">
    <li class="footer-element">
      <router-link to="/"><span class="footer-img index-img"></span></router-link>
    </li>
    <li class="footer-element">
      <router-link to="/type"><span class="footer-img type-img"></span></router-link>
    </li>
    <li class="footer-element">
      <router-link to="/list"><span class="footer-img list-img"></span></router-link>
    </li>
    <li class="footer-element">
      <router-link to="/login"><span class="footer-img login-img"></span></router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'index-footer'
}
</script>

<style lang="stylus" scoped>
  @import '../assets/styles/common/varibles.styl'
  .footer
    display: flex
    flex-direction: row
    position: fixed
    bottom: 0
    height: 1rem
    width: 100%
    background: #fff
    border-top: .001rem solid $lightFontColor
    .footer-element
      width: 25%
      height: 1rem
      line-height: 1rem
      text-align: center
      .footer-img
        display: inline-block
        vertical-align: middle
        margin: 0 auto
        width: .84rem
        height: .8rem
        line-height: .8rem
        background: url(../assets/img/bg.png)
        background-size: 4.68rem 3.26rem
      .index-img
        background-position: 0 0
      .type-img
        background-position: -85px 121px
      .list-img
        background-position: -85px 245px
      .login-img
        background-position: -85px 365px
</style>
