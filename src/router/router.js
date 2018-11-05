import Vue from 'vue'
import Router from 'vue-router'
import NewsGood from '../views/NewsGood.vue';


Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/newsGood',
      component: NewsGood
    },
  ]
})

export default router;