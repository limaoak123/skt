import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/views/login/login.vue'
import register from '@/views/register/register.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login 
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
