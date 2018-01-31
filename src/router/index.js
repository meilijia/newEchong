import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import type from '@/pages/classify/type'
import login from '@/pages/my/login'
//  import list from '@/./list'
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
    }
  ]
})
