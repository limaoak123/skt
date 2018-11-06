import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/views/login/login.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login 
    },

  ]
})
