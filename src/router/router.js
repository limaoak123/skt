import Vue from 'vue'
import Router from 'vue-router'

import NewsGood from '../views/NewsGood.vue';
import PhoneList from '../views/PhoneList.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newsgood',
      component: NewsGood
    },
    {
      path: '/phonelist',
      component: PhoneList
    },
  ]
})
