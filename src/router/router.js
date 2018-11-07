import Vue from 'vue'
import Router from 'vue-router'

import shopCar from '../views/shopCar.vue'
import prdInfo from '../views/prdInfo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shopCar',
      component: shopCar
    },
    {
      path:'/prdInfo',
      component: prdInfo
    }
  ]
})
