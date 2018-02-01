import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import type from '@/pages/classify/type'
import login from '@/pages/my/login'
import cart from '@/pages/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/type',
      name: 'type',
      component: type
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
