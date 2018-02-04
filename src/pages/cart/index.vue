<template>
  <div>
    <index-header class="header"></index-header>
    <empty class="empty"></empty>
    <addcart></addcart>
  </div>
</template>

<script>
import IndexHeader from './header'
import Empty from './empty'
import Addcart from './addcart'

export default {
  name: 'cart',
  components: {
    IndexHeader,
    Empty,
    Addcart
  }
}
</script>

<style lang="stylus" scoped>
  .empty
    display: none
</style>
