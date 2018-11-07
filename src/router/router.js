import Vue from 'vue'
import Router from 'vue-router'
import NewsGood from '../views/NewsGood.vue';
import PhoneList from '../views/PhoneList.vue';
import GoodInfo from '../views/GoodInfo.vue';

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
      path: '/goodinfo',
      name: 'goodinfo',
      component:GoodInfo
    }
  ]
})

export default router;