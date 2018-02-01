<template>
  <div>
    <index-header></index-header>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexHeader from './header'
import IndexFooter from '../../components/footer'

export default {
  name: 'cart',
  components: {
    IndexHeader,
    IndexFooter
  }
}
</script>
