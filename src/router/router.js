import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/views/login/login.vue'
import register from '@/views/register/register.vue'
import classify from '@/views/classify/classify.vue'

import NewsGood from '../views/NewsGood.vue'
import PhoneList from '../views/PhoneList.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/newsgood',
      component: NewsGood
    },
    {
      path: '/phonelist',
      component: PhoneList
    },
    {
      path: '/login',
      name: 'login',
      component: Login 
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    }
  ]
})

export default router;