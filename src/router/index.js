import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import type from '@/pages/classify/type'
//import list from '@/./list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/type',
      name: 'type',
      component: type
    }
//  {
//    path: '/list',
//    name: 'list',
//    component: list
//  }
  ]
})
