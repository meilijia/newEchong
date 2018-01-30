<template>
  <div id="app">
    <router-view/>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexFooter from './components/footer'
export default {
  name: 'App',
  components: {
    IndexFooter
  }
}
</script>

<style></style>
