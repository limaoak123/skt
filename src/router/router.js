import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import NewsGood from '../views/NewsGood.vue';
import PhoneList from '../views/PhoneList.vue';
import GoodInfo from '../views/GoodInfo.vue';
=======
/*引入页面*/
import Login from '@/views/login/login.vue'
import register from '@/views/register/register.vue'

>>>>>>> b8bfb4d9c9abe9c15bdd3ce7b77ac57739f5a9f6

Vue.use(Router)

var router = new Router({
  routes: [
    {
<<<<<<< HEAD
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
=======
      path: '/login',
      name: 'Login',
      component: Login 
>>>>>>> b8bfb4d9c9abe9c15bdd3ce7b77ac57739f5a9f6
    },
    {
      path: '/register',
      name: 'register',
      component: register 
    },
    {
      path: '',
      name: 'Login',
      component: Login 
    }

  ]
})

export default router;