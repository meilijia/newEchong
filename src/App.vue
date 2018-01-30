<template>
  <div id="app">
    <router-view/>
    <index-footer></index-footer>
    <Index></Index>
  </div>
</template>

<script>
import IndexFooter from './components/footer'
import Index from './pages/index'
export default {
  name: 'App',
  components: {
    IndexFooter,
    Index
  }
}
</script>

<style></style>
