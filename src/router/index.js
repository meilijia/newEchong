import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import type from '@/pages/classify/type'
import list from '@/components/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/type',
      name: 'type',
      component: type
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
